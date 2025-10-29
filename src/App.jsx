import ClickSayHello from "./components/ClickSayHello";
import Contacts from "./components/Contacts";
import './App.css'

const App = () => {


  return (
    <div className="App">
      <div className="text-center">
        <h1>Mes contacts</h1>
        <Contacts />
        <ClickSayHello />
      </div>
    </div>
  )
}

export default App
