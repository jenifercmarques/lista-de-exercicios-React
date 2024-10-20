function Desconto(props){
let desconto = true
return(
    <>
    {desconto ? <p>{props.temDesconto}</p>:<p>"Sem Desconto"</p>}
    </>
)
}

export default Desconto