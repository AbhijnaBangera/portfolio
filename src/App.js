import { Routes, Route, BrowserRouter } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";
import "./css/Navbar.css";



import Navbar from "./component/Navbar.js";
import About  from "./component/About.js";
import Skill from "./component/Skill.js";
import Contact from "./component/Contact.js";
import Home from "./component/Home.js";

import Education from './component/Education.js';
import Footer from './component/Footer.js';


function App() {
  return (
    
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/skill' element={<Skill/>} />
      
        <Route path='/education' element={<Education/>} />
        <Route path='/footer' element={<Footer/>} />
        
        
      </Routes>
      <Footer/>
      </BrowserRouter>
      
 
  );
}

export default App;
