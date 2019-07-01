import React from 'react';
import Registration from './registartion'
import Login from './Login'
import {BrowserRouter ,Switch, Route, Link } from 'react-router-dom';

import './login.css';
import CicApp_Logo from '../src/1024px-Toicon-icon-fandom-fly.png'

function App() {
   return (
    <BrowserRouter>
      <div>
       <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/registration" exact component={Registration}/>
          <Route path="/login" exact component={Login}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}



const Home = () => (
  <div class="AppBackround">
  <div class="LoginWrapper">
    <img class="AppLogo" src={CicApp_Logo} alt="CicApp Logó" />
    <div class="boxLayout">
      <h1>CicApp</h1>
      <p>Ez a legkirályabb cicás app a világon! Regisztrálj vagy lépj be a használatához!</p>
      <Link to='/Registration'>
      <button class = "LogInButton rainbow"> Regisztráció </button>
      </Link>
      <Link to='/Login'>
      <button class="LogInButton rainbow"> BELÉPÉS </button>
      </Link>
    </div>   
  </div>
  </div>
    );

export default App;