import React, {useReducer, useState} from 'react';

import './Todolist.css'
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import {addTaskAC, removeTaskAC, tasksReducer, TsarType} from './reducers/tasksReducer';
import {ChangeFilterAC, filterReducer} from './reducers/filterReducer';
import {TaskType} from '../Todolist7/Todolist';

export type FilterValuesType = 'all' | 'active' | 'completed';

export const Lesson7Reducers = () => {
    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: 'HTML&CSS', isDone: true},
    //     {id: v1(), title: 'JS', isDone: true},
    //     {id: v1(), title: 'ReactJS', isDone: false},
    //     {id: v1(), title: 'Rest API', isDone: false},
    //     {id: v1(), title: 'GraphQL', isDone: false},
    // ]);

    let [tasks, dispatchTasks] = useReducer(tasksReducer, [
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Rest API', isDone: false},
        {id: v1(), title: 'GraphQL', isDone: false},
    ]);

    function removeTask(id: string) {
        // let filteredTasks = tasks.filter(t => t.id != id);
        // setTasks(filteredTasks);

        // задача вызвать actionCreator (это просто посредник)
        dispatchTasks(removeTaskAC(id))
    }

    function addTask(title: string) {
        // let task = {id: v1(), title: title, isDone: false};
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);

        dispatchTasks(addTaskAC(title))
    }

    // let [filter, setFilter] = useState<FilterValuesType>('all');
    let [filter, dispatchFilter] = useReducer(filterReducer, 'all');

    let tasksForTodolist = tasks;

    if (filter === 'active') {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }

    function changeFilter(value: FilterValuesType) {
        // setFilter(value);

        dispatchFilter(ChangeFilterAC(value))
    }


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}/>
        </div>
    );
}


