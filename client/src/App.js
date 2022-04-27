import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Routes, Route } from 'react-router';
// import Router from './Router';
import Navigation from './components/Navigation';
import Crypto from './components/Crypto';
import Home from './components/Home';
import cookie from 'cookie'


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState()
  const [userID, setUserID] = useState()

  console.log("App.js Status: ", loggedIn, "User: ", username, "ID", userID)
    
  const updateStatus = (x) => {
    setLoggedIn(x)
    setUserID('')
    setUsername('')
  }

  return (
    <BrowserRouter>
        <Navigation setUsername={setUsername} updateStatus={updateStatus} setUserID={setUserID} userID={userID} username={username} loggedIn={loggedIn}/>
        <Routes>
            <Route exact path="/" element={<Home loggedIn={loggedIn} userID={userID}/>} />
            <Route exact path='/crypto' element={<Crypto/>}/>
          </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;
