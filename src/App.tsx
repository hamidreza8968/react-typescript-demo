import React from 'react';
import './App.css';
import Greeting from "./components/Greeting/Greeting";
import Person from "./components/Person/Person";
import PersonList from "./components/PersonList/PersonList";
import Status from "./components/Status/Status";

function App() {
    const personName = {
        first:"Hamidreza",
        last:"Seyedabadi",
    };
    const nameList=[
        {first:"Hamidreza",
         last:"Seyedabadi"},
        {first:"Mansoureh",
        last:"Hedayat"},
        {first:"Farhad",
         last:"Mehryari"}
    ];
  return (
    <div className="App">
      <Greeting name="Hamid" messageNum={8} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status="error"/>
    </div>
  );
}

export default App;
