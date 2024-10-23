import ChildrenP from "./ChildrenP";

function Father(props){
    return (
        <>
            <ChildrenP contagem={props.name}/>
        </>
    )
}
export default Father;