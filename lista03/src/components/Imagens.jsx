

function Imagens(){
    const images = ['https://images.pexels.com/photos/9487502/pexels-photo-9487502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2','https://images.pexels.com/photos/27948634/pexels-photo-27948634/free-photo-of-panorama-vista-paisagem-montanhas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2']

    return(
        <>
        {images.map((image) => 
            <img src={image} alt="" style={{width: '250px'}}/>
        
    )}
        </>
    )
}

export default Imagens