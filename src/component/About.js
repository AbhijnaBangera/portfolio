import "../css/About.css";
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
        
        <h3><p>Welcome to my portfolio.I am Abhijna  <br/>,currently pursuing my Engineering in Canara Engineering College. I am passionate web developer with strong skill in HTML,CSS and java Script. </p></h3>
       
        <div className="photos">
          <img src={img} alt="img" />

        </div>
        

        <div class="information"></div>
      </div>
    </>
  );
}
export default About;
