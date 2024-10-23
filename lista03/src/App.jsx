import './App.css'
import Map from './components/Map.jsx';
import Boolean from './components/Boolean.jsx';
import Father from './components/PaiEFilho/Father.jsx';
import ChildrenP from './components/PaiEFilho/ChildrenP.jsx';
import TextoDinamico from './components/TextoDinamico.jsx';
import Card from './components/Card/Pai.jsx';
import TabelaUsuarios from './components/Tabela.jsx';
import Aninhamento from './components/Aninhados.jsx';
import Key from './components/Key.jsx';
import Imagens from './components/Imagens.jsx';
import EstiloDinamico from './components/EstiloDinamico.jsx';



function App() {
  const usuarios = [
    { id: 1, nome: 'Jenifer', idade: 21 },
    { id: 2, nome: 'Stefany', idade: 20 },
    { id: 3, nome: 'Campelo', idade: 18 },
  ];

  

  return (
    <>
    <Map/>
    <Father name='Jaja'/>
    <ChildrenP/>
    <Boolean isVisible={false}/>
    <TabelaUsuarios usuarios={usuarios}/>
    <Imagens/>
    <TextoDinamico/>
    <Key/>
    <Card/>
    <Aninhamento titulo='Crias do Jaja' paragrafo='Camisa 10!'/>
    <EstiloDinamico/>
    </>
  )
}

export default App;
