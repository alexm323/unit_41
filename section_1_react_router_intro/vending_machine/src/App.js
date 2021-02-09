import './App.css';
import VendingMachine from './VendingMachine';
import {BrowserRouter, Route} from 'react-router-dom';
import Soylent from './Soylent'
import Chips from './Chips'
import Pepsi from './Pepsi'
import Navbar from './Navbar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      
      <Route exact path='/'>
      <Navbar/>
        <VendingMachine/>
      </Route>
      <Route exact path='/soylent'>
        <Soylent/>
      </Route>
      <Route exact path='/pepsi'>
        <Pepsi/>
      </Route>
      <Route exact path='/chips'>
        <Chips/>
      </Route>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
