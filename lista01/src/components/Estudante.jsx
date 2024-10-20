function Estudante(props){
    let estudante = true
    return(
        <>
        {estudante ? <p>{props.estuda}</p>:<p>{props.naoEstuda}</p>}
        </>
    )

}

export default Estudante