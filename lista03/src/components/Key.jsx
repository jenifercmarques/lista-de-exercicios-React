import { useState } from "react"

function Key(){
    const [names, setNames] = useState([{ id: 1, nome: 'Jenifer'},
    { id: 2, nome: 'Stefany'},
    { id: 3, nome: 'Campelo'}])

    const removeNames = (id) => {
        const newNames = names.filter((name) => name.id !== id);
    setNames(newNames);
    }
return(
    <ul>
        {names.map((name) => 
        <li key={name.id}>{name.nome}
        <button onClick={() => removeNames(name.id)}>Remove</button>
        
        </li>
        )}
    </ul>
)
}

export default Key