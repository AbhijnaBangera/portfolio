import "../css/Education.css";
import Card from "./Card.js";

function Education() {
  const EducationP = [
    {
      id: 1,
      H: "hello",
      P: "content1",
    },
    {
      id: 2,
      H: "hai",
      P: "content2",
    },
    {
      id: 3,
      H: "hi",
      P: "content3",
    },
  ]

  return (
    <>
 <div>
       
       {
        EducationP.map((item)=>(
          <Card Education={item}/>
          
        ))
       }
      </div>






      {/* { <div class="Education">
        <h1>
          <a href="Education"></a>Education
        </h1>
      </div>

      <div className="container">
        <div className="box1">Left Div Content</div>
        <div className="box2">Right Div Content</div>
        <div className="box3">Third div content </div>
      </div> } */}
    </>
  );
}
export default Education;
