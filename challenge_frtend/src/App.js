import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CrearProyecto from './Components/CrearProyecto';
import React, { useState } from 'react';
import Inicio from './Components/Inicio';

function App() {

 

  return (

    <Router>
      <div className='App-header'>
        <h1><Link to='/' style={{textDecoration:'none', color:'white'}}>CHALLENGE</Link></h1>
      </div>

      <Switch>
      <Route path="/create-proyect" render={() => <CrearProyecto />} />
      <Route path="/" render={() => <Inicio />} />
     
      </Switch>

    </Router>
  );
}

export default App;
