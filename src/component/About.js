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
        
        <h3>Abhijna</h3>
        <h3>4CB21CS001</h3>
        <h3>Canara Engineering College</h3>
        <div className="photo">
          <img src={img} alt="img" />

        </div>
        

        <div class="information"></div>
      </div>
    </>
  );
}
export default About;
