function Nivel(props){
    let nivel = 'iniciante'
return(
    <>
    {nivel = 'iniciante' ? <p>{props.Iniciante}</p> : nivel = 'intermediario' ? <p>{props.Intermediario}</p> : <p>Parabéns, especialista</p>}
    </>
)
}

export default Nivel