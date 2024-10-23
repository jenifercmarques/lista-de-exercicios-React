
function Aninhamento(props){
    const names = ['Jenifer', 'Campelo', 'Stefany']
    
    const listName = names.map(names => 
            <li>{names}</li>)

    return(
        <>
        <h1>{props.titulo}</h1>
        <ul>
            {listName}
        </ul>
        <p>{props.paragrafo}</p>
        </>
    )
}

export default Aninhamento;