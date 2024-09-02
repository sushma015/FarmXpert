import React, { useEffect, useState } from 'react';
import AWS from 'aws-sdk';
import './App.css';
const Prediction = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  AWS.config.update({
    accessKeyId: 'AKIA6HM2F4C6CPSGQ5WR',
    secretAccessKey: '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',
    region: 'us-east-1',
  });
  const s3 = new AWS.S3();
  const params = {
    Bucket: 'crop-test',
    
  };

  useEffect(()=>{
    deleteAllFiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  const deleteAllFiles = async () => {
    try {
      // List all objects in the bucket
      const listObjects = await s3.listObjectsV2(params).promise();
      if (listObjects.Contents.length === 0) return;

      // Create a list of objects to delete
      const deleteParams = {
        Bucket: params.Bucket,
        Delete: { Objects: [] },
      };

      listObjects.Contents.forEach(({ Key }) => {
        deleteParams.Delete.Objects.push({ Key });
      });

      // Delete all objects
      await s3.deleteObjects(deleteParams).promise();
      console.log('All files deleted successfully');
    } catch (error) {
      console.error('Error deleting files:', error);
    }
  };


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    // Configure AWS SDK
    AWS.config.update({
      accessKeyId: 'AKIA6HM2F4C6CPSGQ5WR',
      secretAccessKey: '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',
      region: 'us-east-1',
    });

    const s3 = new AWS.S3();
    const params = {
      Bucket: 'crop-test',
      Key: selectedFile.name,
      Body: selectedFile,
      ContentType: selectedFile.type,
    };

    try {
      // Upload image to S3
      const uploadResult = await s3.upload(params).promise();
      setImageUrl(uploadResult.Location);

      // Call Rekognition Custom Labels
      const rekognition = new AWS.Rekognition();
      const rekognitionParams = {
        Image: {
          S3Object: {
            Bucket: params.Bucket,
            Name: params.Key,
          },
        },
        ProjectVersionArn: 'arn:aws:rekognition:us-east-1:977965277372:project/crop-disease-detection/version/crop-disease-detection.2024-09-01T11.25.14/1725170114162',
      };

      const rekognitionResult = await rekognition.detectCustomLabels(rekognitionParams).promise();
      setAnalysisResult(rekognitionResult.CustomLabels);
    } catch (error) {
      console.error('Error uploading file or analyzing image:', error);
    }
  };

  return (<center>
    <div id="pred">
      <h2>Upload and Analyze Image</h2>
      <input type="file" onChange={handleFileChange} /><br></br><br></br>
      <button onClick={handleUpload}>Upload and Analyze</button>
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
      {analysisResult && (
        <div id="output">
          <h3>Analysis Result:</h3>
          <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
        </div>
      )}
    </div>
    </center>
  );
};

export default Prediction;
