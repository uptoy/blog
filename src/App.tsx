import React from 'react';
import './App.css';
import Home from './containers/Home'
import Header from './components/Header'
import TopMedia from './components/TopMedia'
import {BrowserRouter as Router,Route } from 'react-router-dom'
import ContactUS from './containers/ContactUS'
import Post from './containers/Post'

const  App:React.FC= () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <TopMedia />
        <Route path="/" exact component={Home}  />
        <Route path="/contact-us" component={ContactUS}  />
        <Route path="/post/:postId" component={Post}  />
      </div>
    </Router>
  );
}

export default App;

