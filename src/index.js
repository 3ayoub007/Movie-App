//  importing react
import React from 'react';
//  importing react-dom
import ReactDOM from 'react-dom';
//  importing main app component
import App from './App';
//  importing Browser Router
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
