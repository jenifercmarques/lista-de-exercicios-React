import './App.css'
import Princip from './components/Text'
import Paragrafo from './components/frase'
import Lista from './components/LISTA.JSX'
import Imagem from './components/imagem'
import Botao from './components/botao'
import Link from './components/link'
import TituloSub from './components/tituloSubtitulo'
import Boolean from './components/boolean'
import Div from './components/div'
import Diversos from './components/diversos'





function App() {

  return (
    <>
      <Princip texto="Olá, Mundo!"/>
      <Paragrafo frase="Conhecendo o Step By Step"/>
      <Lista item1="Variável" item2="Coxinha" item3="Tiranossauro Rex"/>
      <Imagem/>
      <Botao button="Clique Aqui!"/>
      <Link react="Site React"/>
      <TituloSub titulo="Variavel" subtitulo="Ocultado pela Aurora"/>
      <Boolean true="Bom dia!" false="Boa noite!"/>
      <Div texto="O trabalho não tem fim"/>
      <Diversos/>      
    </>
  )
}

export default App
