import './App.css'
import Saudacao from './components/Saudacao'
import Ola from './components/Ola'
import Autenticacao from './components/Autenticado'
import Idade from './components/Idade'
import Estudante from './components/Estudante'
import Nota from './components/Nota'
import Desconto from './components/Desconto'
import Status from './components/Status'
import Nivel from './components/Nivel'
import Botao from './components/Botao'

function App() {

  return (
    <>
      <Saudacao/>
      <Ola nome='Joilson'/>
      <Autenticacao text="Bem Vindo, usuário!"/>
      <Idade maior="Você é Adulto!"  menor="Você é menor de idade!"/>
      <Estudante estuda="Você é um estudante!" naoEstuda="Você não é um estudante!"/>
      <Nota excelente="Excelente!" bom="Bom!" melhorar="Precisa Melhorar!"/>
      <Desconto temDesconto="Desconto Aplicado!"/>
      <Status online="Usuário Online"/>
      <Nivel Iniciante="Bem Vindo Iniciante!" Intermediario="Você está progredindo!"/>
      <Botao sair="Sair" entrar="Entrar"/>
    </>
  )
}

export default App
