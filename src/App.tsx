import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from "./components/Greeting/Greeting";

function App() {
  return (
    <div className="App">
      <Greeting name="Hamid" messageNum={8} isLoggedIn={false}/>
    </div>
  );
}

export default App;
