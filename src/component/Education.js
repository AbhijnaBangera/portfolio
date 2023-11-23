import "../css/Education.css";
import Card from "./Card.js";

function Education() {
  const EducationP = [
    {
      id: 1,
      H: "Primary",
      P: "THUMBAY CENTRAL SCHOOL",
      img:"htm"
    },
    {
      id: 2,
      H: "High School",
      P: "THUMBAY ENGLISH MEDIUM HIGH SCHOOL",
    },
    {
      id: 3,
      H: "College",
      P: "THUMBAY PRE UNIVERSITY COLLEGE",
    },
  ]

  return (
    <>
 <div>
 <div class="Education">
        <h1>
          <a href="Education"></a>Education
        </h1>
      </div>

      {/* <div className="container">
        <div className="box1">First div content</div>
        <div className="box2">Second div content</div>
        <div className="box3">Third div content</div>
      </div> */}
       {
        EducationP.map((item)=>(
          <Card Education={item}/>
          
        ))
        }
      </div>
      </>
  );
}
export default Education;
