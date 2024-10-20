function Autenticacao(props){
    let verificacao = true
    return(
        <>
        {verificacao ? <p>{props.text}</p>:""}
        </>
    )
}

export default Autenticacao