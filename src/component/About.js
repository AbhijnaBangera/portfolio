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
        
        <h3><p>My name is Abhijna <br/>and I am studing in canara Engineering<br/> College in Benjanpadav Mangalore .<br/>I am studing in 3rd year 6th semester.My goal is to get place in a IT company </p></h3>
       
        <div className="photos">
          <img src={img} alt="img" />

        </div>
        

        <div class="information"></div>
      </div>
    </>
  );
}
export default About;
