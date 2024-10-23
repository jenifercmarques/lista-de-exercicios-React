function Map(){
    const names = ['Jenifer',
    'Campelo',
    'Stefany',
    'Caio',
    'Weslley']

    const listName = names.map(names => 
        <li>{names}</li>
    )
    return(
        <>
        <h1>Lista com MAP</h1>
        <ul>
            {listName}
        </ul>
        </>
    )
}

export default Map;