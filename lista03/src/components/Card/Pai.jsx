import Filho from "./Filho";

function Card(){
    const estiloBorda = {
        border : '4px solid green',
        borderRadius : '10px'  
    } 

    return(
        <div className="card" style={estiloBorda}>
            <Filho/>
        </div>
    )
}

export default Card;