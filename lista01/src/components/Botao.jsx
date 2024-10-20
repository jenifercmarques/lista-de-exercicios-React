function Botao(prop){
    const logado = true
    return(
        <>
        {logado ? <button>{prop.sair}</button> : <button>{prop.entrar}</button>}
        </>
    )
}

export default Botao