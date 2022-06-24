import React from 'react';
import './App.css';
import MemoWallList from './MemoWallList';
import { useState} from 'react'
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

function App() {
  const date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  const [showLogin, setShowLogin] = useState(false)
  

  return (
    <div className="App">
      <header className="App-header">
      <p>App Header</p>
      {!showLogin && <button onClick={() => {setShowLogin(true)}}>Login</button>}
      {showLogin &&<button onClick={() => {setShowLogin(false)}}>Logout</button>}
      </header>
      {!showLogin && <LoginPage/>}
      <MemoWallList/>
      <RegisterPage/>
      <footer>
          Copyright &copy; Ken Lee {year + "/" + month + "/" + day}
      </footer>
    </div>
  );
}

export default App;
