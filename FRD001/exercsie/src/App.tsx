import React from 'react';
import logo from './logo.png';
import appStyle from './App.module.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Simple Website</h1>
      </header>
      <section>
        This is a simple website made without React. Try to convert this into React enabled.
        <ol>
          <li>First, you need to use <span className={appStyle.command}>create-react-app</span></li>
          <li>Second, you need to run <span className={appStyle.command}>npm start</span></li>
        </ol>
      </section>
      <footer>
        <img src={logo} alt="Tecky logo"/>
      </footer>
    </div>
  );
}

export default App;
