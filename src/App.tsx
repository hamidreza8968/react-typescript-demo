import React from 'react';
import './App.css';
import Greeting from "./components/Greeting/Greeting";
import Person from "./components/Person/Person";

function App() {
    const personName = {
        first:"Hamidreza",
        last:"Seyedabadi",
    };
  return (
    <div className="App">
      <Greeting name="Hamid" messageNum={8} isLoggedIn={false}/>
      <Person name={personName}/>
    </div>
  );
}

export default App;
