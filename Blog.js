import './App.css';
import { useState } from 'react';
import BlogCard from './BlogCard';
function Blog()
{
    const [add,setAdd]=useState(false);
    const bloglist=[{id:1,title:'Agri Farming',content:'Welcome to agrifarming.in. Here you can find information related to agriculture farming information in India. This blog also covers various factors involved in agriculture farming along with project reports and case studies in India. It may also provide some general information about agriculture farming',date:'12-08-2024'},
        {id:2,title:'ROYS FARM',content:'ROYS FARM is all about using modern methods in farming and agriculture worldwide ROYS FARM is enriched with numerous farming business ideas and guides. Here we are describing modern farming businesses for high profits',date:'30-07-2024'},
        {id:3,title:'AgriBegri Blog',content:'AgriBegri is Indias best agriculture products marketplace. Provides free agro advisory and resonable agri input products all over India.',date:'24-07-2024'},
        {id:4,title:'Dhanuka Blog',content:'Dhanuka Agritech Ltd. is one of the leading pioneers of the Agri Input industry. For the last 4 decades, we have served Indian agriculture with world-class crop protection solutions that include herbicides, fungicides, insecticides, and plant growth, regulators.',date:'09-05-2024'},
        {id:5,title:'Bijak Blog',content:'Bijak Blog is your go-to resource for online mandi trading, top agricultural commodities, the latest events on agritech, and tips to help you grow your agriculture trade.',date:'15-03-2024'}];
    return(<><div id="blog"><div id="blogs">
        {!add && <><div><input type="submit" value="+ Add" onClick={()=>{setAdd(true)} } id="add-btn"></input></div>
        <div id='blog-list'>
         {      
        bloglist.map((p) => (
            <BlogCard {...p} key={p.id}></BlogCard>
        ))
    }
</div></>}

    </div>
    {add && <div id="add">
        <span id="close-btn" onClick={()=>{setAdd(false)}}>❌</span>
        <h1 id="add-title">Add Blog</h1>
        <center><table cellSpacing={20} id="blog-table"> 
            <tbody>
            <tr><td>Title</td><td><input type="text"/></td></tr>
            <tr><td>Content</td><td><textarea></textarea></td></tr>
            <tr><td>Photo</td><td><input type="file"></input></td></tr></tbody>
        </table></center>
        <input type='submit' value="Post" id="post-btn"onClick={()=>{setAdd(false)}}></input>
    </div>}
    </div></>);
}
export  default Blog;