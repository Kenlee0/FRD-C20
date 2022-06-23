import React from 'react';
import './App.css';
import MemoWallList from './MemoWallList';
import { useState} from 'react'
import LoginPage from './LoginPage';

function App() {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
      <p>App Header</p>
      {!showLogin && <button onClick={() => {setShowLogin(true)}}>Login</button>}
      {showLogin &&<button onClick={() => {setShowLogin(false)}}>Logout</button>}
      </header>
      <LoginPage/>
      <MemoWallList/>
    </div>
  );
}

export default App;
