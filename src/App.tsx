import React from 'react';
import './App.css';
import Greeting from "./components/Greeting/Greeting";
import Person from "./components/Person/Person";
import PersonList from "./components/PersonList/PersonList";
import Status from "./components/Status/Status";
import Heading from "./components/Heading/Heading";
import Oscar from "./components/Oscar/Oscar";
import Button from "./components/Button/Button";

function App() {
    const personName = {
        first: "Hamidreza",
        last: "Seyedabadi",
    };
    const nameList = [
        {
            first: "Hamidreza",
            last: "Seyedabadi"
        },
        {
            first: "Mansoureh",
            last: "Hedayat"
        },
        {
            first: "Farhad",
            last: "Mehryari"
        }
    ];
    return (
        <div className="App">
            <Greeting name="Hamid" messageNum={9} isLoggedIn={true}/>
            <Person name={personName}/>
            <PersonList names={nameList}/>
            <Status status="error"/>
            <Heading>Placeholder text</Heading>
            <Oscar>
                <Heading>Oscar goes to Leonardo Dicaprio</Heading>
            </Oscar>
            <Button handleClick={(e , id) => console.log("Button clicked!" , e , id)}/>
        </div>
    );
}

export default App;
