
function EstiloDinamico(){
    const images = [
        {url: 'https://images.pexels.com/photos/17409458/pexels-photo-17409458/free-photo-of-lanche-petisco-aperitivo-frito.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', altText: 'Alimento denominado como "Coxinha"'},
        {url: 'https://www.minhatorcida.com.br/wp-content/uploads/2023/01/share.jpg.webp', altText: 'Camiseta designada ao melhor jogador da selação'},
        {url: 'https://http2.mlstatic.com/D_NQ_NP_2X_818263-MLB33031167200_112019-F.jpg', altText: 'Taco de Baseboll personalizado'}
    ]
    return(
        <>
        {images.map((image) => 
            <img 
            src={image.url} 
            alt={image.altText}
            style={{ width: '200px', margin: '10px' }} />
        )}
        </>
    )
}

export default EstiloDinamico;