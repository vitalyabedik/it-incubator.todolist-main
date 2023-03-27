import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const forTrack1 = "What to learn11111 "
    const forTrack2 = "What to learn22222 dfhgdfgdfg"

    const tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "ReactJS", isDone: false}
    ]
    const tasks2 = [
        {id: 1, title: "Hello world", isDone: true},
        {id: 2, title: "I am Happy", isDone: false},
        {id: 3, title: "Yo", isDone: false}
    ]

    return (
        <div className="App">
            <Todolist track1={forTrack1} track2={100020} tasks={tasks1}/>
            <Todolist track1={forTrack2} tasks={tasks2}/>
        </div>
    );
}

export default App;
