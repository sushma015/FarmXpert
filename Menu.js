import './App.css';
import { Routes,Route ,Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Prediction from "./Prediction";
import Error  from './Error';
import BlogCard from './BlogCard';
function Menu() {
    return (
        <><div id="top-bar">
          <ul id="menubar">
                <li><Link id="link" to="/Home">Home</Link></li>
                <li><Link id="link" to="/Prediction">Prediction</Link></li>
                <li><Link id="link" to="/Blog">Blog</Link></li>
                <li><Link id="link" to="/About">About US</Link></li>
            </ul></div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Blog" element={<Blog/>}/>
            <Route path="/Blogcard" element={<BlogCard/>}/>
            <Route path="/Prediction" element={<Prediction/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
         </>
      );
    
}

export default Menu;
