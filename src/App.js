import { Component, createContext, useContext, useState, memo } from "react";

const Context = createContext()
const Provider = ({children}) => {
 const [contador,setContador]= useState(0)
 const incrementar=() => setContador(contador +1)
 const decrementar=() => setContador(contador -1)
  return(
    <Context.Provider value={{contador, decrementar, incrementar}}>
      {children}
    </Context.Provider>
  )
}
const Incrementar = memo(() => {
  console.log('incrementar');
  const {incrementar}= useContext(Context)
  return (
    <button onClick={incrementar}> Incrementar</button>
  )
})
const Decrementar = memo(() => {
  console.log('decrementar');
  const {decrementar}= useContext(Context)
  return (
    <button onClick={decrementar}> Decrementar</button>
  )
})
const Label = () => {
  console.log('label');
  const {contador}= useContext(Context)
  return (
  <h1>{contador}</h1>
  )
}
function App() {
  return (
    <Provider>
      <Label></Label>
      <Decrementar></Decrementar>
      <Incrementar></Incrementar>
    </Provider>
  )
}

export default App;
