function Boolean(prop){
    let Dia = true
    return(
        <>
        {Dia ? <p>{prop.true}</p> : <p>{prop.false}</p>}
        </>
    )
}

export default Boolean