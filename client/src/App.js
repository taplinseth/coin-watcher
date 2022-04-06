import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Router from './Router';
const axios = require('axios');

function App() {
    return (
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    );
  }
  
  export default App;
