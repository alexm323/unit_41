import React from 'react';
import {BrowserRouter,Route,Link, NavLink} from 'react-router-dom'
import './App.css';
import Home from './Home'
import Eat from './Eat'
import Drink from './Drink'
import Navbar from './NavBar'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/drink'>
        <Drink/>
      </Route>
      <Route exact path='/eat'>
        <Eat/>
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
