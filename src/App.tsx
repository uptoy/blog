import React from 'react';
import './App.css';
import Home from './containers/Home'
import Header from './components/Header'
import TopMedia from './components/'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import ContactUS from './containers/ContactUS'
import Post from './containers/Post'

const  App:React.FC= () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
