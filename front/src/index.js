import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  {BrowserRouter, Switch, Route, Router}from 'react-router-dom'
import  Login from './Admin-Panel/admin/login'
import  Dashboard from './Admin-Panel/admin/dashboard'

ReactDOM.render(
 
  <React.StrictMode>
    
    
  <BrowserRouter>
    <Switch>
          <Route path="/about">
            <h1>Not Yet</h1>
          </Route>
          <Route path="/login">
          
            <Login />
          </Route>
          
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <App />
          </Route>
          
        </Switch>
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
