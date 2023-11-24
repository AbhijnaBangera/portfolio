import img1 from "../images/skill1.jpg";
import img2 from "../images/skill2.jpg";
import img3 from "../images/skill3.jpg";
import img4 from "../images/skill4.jpg";

import "../css/Skill.css"
import react from "react";
function Skill() {
  return (
    <>
    <div className="foot">

   
      <div class="Skill">
        <h1>
          <a href="Skill"></a>Skill
        </h1>
      </div>
      <div className="photo">
          <img src={img1} alt="img" />

        </div>
        <div className="photo">
          <img src={img2} alt="img" />

        </div>
        <div className="photo">
          <img src={img3} alt="img" />

        </div>
        <div className="photo">
          <img src={img4} alt="img" />

        </div>
         </div>
    </>
  );
}
export default Skill;