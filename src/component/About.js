import "../css/About.css";
import react from "react";
import img from "../images/nature.jpg";
function About() {
  return (
    <>
      <div class="About">
        <h1>
          <a href="about"></a>About Me
        </h1>
      </div>
      <div class="info">
        
        <h3><p>My name is Abhijna and I am studing in canara Engineering College in Benjanpadav Mangalore .I am studing in 3rd year 6th sem.My goal is to get place in a IT company </p></h3>
       
        <div className="photos">
          <img src={img} alt="img" />

        </div>
        

        <div class="information"></div>
      </div>
    </>
  );
}
export default About;
