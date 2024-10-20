function Status(props){
    let usuario = true
    return(
        <>
        {usuario ? <p>{props.online}</p>:<p>Usuário offline</p>}
        </>
    )
}

export default Status