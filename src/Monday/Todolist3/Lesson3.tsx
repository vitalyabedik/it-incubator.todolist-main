import React, {useState} from 'react';

import {v1} from 'uuid';
import {Todolist3} from './Todolist3';

export type FilterValuesType = 'all' | 'active' | 'completed';

export const Lesson3 = () => {
    let [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Rest API', isDone: false},
        {id: v1(), title: 'GraphQL', isDone: false},
    ]);

    const addTask = (newTitle: string) => {
        const newTask = {
            id: v1(),
            title: newTitle,
            isDone: false
        }
        // setTasks(tasks, newTask)
        setTasks([newTask, ...tasks])
    }

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }

    let [filter, setFilter] = useState<FilterValuesType>('all');

    let tasksForTodolist = tasks;

    if (filter === 'active') {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    return (
        <div className="App">
            <Todolist3 title="What to learn"
                       tasks={tasksForTodolist}
                       removeTask={removeTask}
                       changeFilter={changeFilter}
                       addTask={addTask}
            />
        </div>
    );
}

