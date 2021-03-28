import React from 'react';
import './App.css';
import Home from './pages/home';
import Header from './components/header';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
