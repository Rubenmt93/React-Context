import { createContext, useContext } from "react";

const Context = createContext('Valor por defecto')
const Context2 = createContext('Valor por defecto2')
const Provider = ({ children}) => {
  return(
    <Context.Provider value={'mi valor'}>
      {children}
    </Context.Provider>
  )
}


const Contenido = () => {
  
  const ctx = useContext(Context)
  return (
    <div>
      {ctx}
    </div>
  )
}
const Contenido2 = () => {
  
  const ctx = useContext(Context2)
  return (
    <div>
      {ctx}
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <Provider>
        <Contenido/>
        <Contenido2/>
      </Provider>
    </div>
  );
}

export default App;
