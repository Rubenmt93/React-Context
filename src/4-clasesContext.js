import {Component, createContext} from 'react'

const Context = createContext('mi valor');
const Provider = ({ children })=> {
  return (
    <Context.Provider value='Otro valor'>
       {children}
    </Context.Provider>
  )
}
class Componente extends Component {
  // static contextType = Context
  render() {
    console.log(this.context);
    return (
      <div>
        Hola Mundo
      </div>
    )
  }
}
Componente.contextType= Context
const App = () => {
  return(
    <Provider>
      <Componente></Componente>
    </Provider>
  )
}
export default App