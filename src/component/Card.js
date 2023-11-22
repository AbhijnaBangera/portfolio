import "../css/Card.css"

function Card({Education}){
    console.log(Education)
    return(
        <>
        <div className="card">
        <h1>{Education.H}</h1>
        <p>{Education.P}</p>
        </div>
        </>
    );
}
export default Card;
