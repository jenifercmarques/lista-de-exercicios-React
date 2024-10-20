function Idade(props){
    let age = 18
    return(
        <>
        {age ? <p>{props.maior}</p>:<p>{props.menor}</p>}
        </>
    )
}

export default Idade