function Nota(props){
let nota = 90
return(
    <>
    {nota >=90 ? <p>{props.excelente}</p> : nota >=70 ? <p>{props.bom}</p> : <p>{props.melhorar}</p>}
    </>
)
}

export default Nota