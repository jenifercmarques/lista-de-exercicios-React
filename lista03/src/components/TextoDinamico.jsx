function TextoDinamico({ isHighlighted }) {
    const estiloParagrafo = {
      color: isHighlighted ? 'red' : 'black',
      fontSize: '18px',
      margin: '10px 0'
    };
  
    return (
      <p style={estiloParagrafo}>
        O estilo do paragráfo foi alterado!
      </p>
    );
  }
  
  export default TextoDinamico;