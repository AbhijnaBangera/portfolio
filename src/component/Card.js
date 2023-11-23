import "../css/Card.css"
import htm from "../images/htm.jpg";

function Card({Education}){
    console.log(Education)
    const imgs=(value)=>{
        if(value==="htm")
            return htm;

        
    }
    return(

        <>
        
        <div className="card">
        <h1>{Education.H}</h1>
        <p>{Education.P}</p>
        <div className="picture">
        <img src={imgs(Education.img)}/>
        </div>
        </div>
        </>
    );
}
export default Card;
