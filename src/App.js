import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './components/Login/Login'
import Home from './components/Home/Home';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  

  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login setIsUserLoggedIn={setIsUserLoggedIn}/>}/>
        <Route exact path="/home" element={<Home setIsUserLoggedIn={setIsUserLoggedIn} isUserLoggedIn={isUserLoggedIn}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
