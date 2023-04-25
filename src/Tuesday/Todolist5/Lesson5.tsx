import React, {useState} from 'react';

import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

type todolistsType = {
    id: string,
    title: string
    filter: FilterValuesType
}
export type FilterValuesType = 'all' | 'active' | 'completed';
type AssocTasksType = {
    [key: string]: TaskType[]
}

export const Lesson5 = () => {
    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<AssocTasksType>({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false},
            {id: v1(), title: 'GraphQL', isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: 'HTML&CSS2', isDone: true},
            {id: v1(), title: 'JS2', isDone: true},
            {id: v1(), title: 'ReactJS2', isDone: false},
            {id: v1(), title: 'Rest API2', isDone: false},
            {id: v1(), title: 'GraphQL2', isDone: false},
        ]
    });

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: 'HTML&CSS', isDone: true},
    //     {id: v1(), title: 'JS', isDone: true},
    //     {id: v1(), title: 'ReactJS', isDone: false},
    //     {id: v1(), title: 'Rest API', isDone: false},
    //     {id: v1(), title: 'GraphQL', isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>('all');

    const removeTodolist = (todolistID: string) => {
        setTodolists(todolists.filter(t => t.id !== todolistID))
        delete tasks[todolistID]
    }

    function removeTask(todolistID: string, taskID: string) {
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter(el => el.id !== taskID)})

        // let filteredTasks = tasks.filter(t => t.id != id);
        // setTasks(filteredTasks);
    }

    function addTask(todolistID: string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todolistID]: [newTask, ...tasks[todolistID]]})

        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus(todolistID: string, taskId: string, isDone: boolean) {
        setTasks({...tasks, [todolistID]: tasks[todolistID].map(t => t.id === taskId ? {...t, isDone} : t)})

        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }
        //
        // setTasks([...tasks]);
    }

    function changeFilter(todolistID: string, value: FilterValuesType) {
        // setFilter(value);
        // {id: v1(), title: 'What to buy', filter: 'all', filter100200: value},
        setTodolists(todolists.map(el => el.id === todolistID ? {...el, filter: value} : el))
    }

    return (
        <div className="App">
            {
                todolists.map(el => {

                    // переносим в todolist все с фильтрами
                    let tasksForTodolist = tasks[el.id];

                    if (el.filter === 'active') {
                        tasksForTodolist = tasks[el.id].filter(t => !t.isDone);
                    }
                    if (el.filter === 'completed') {
                        tasksForTodolist = tasks[el.id].filter(t => t.isDone);
                    }

                    return (
                        <Todolist
                            key={el.id}
                            todolistID={el.id}
                            title={el.title}
                            tasks={tasksForTodolist}
                            removeTodolist={removeTodolist}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeStatus}
                            filter={el.filter}
                        />
                    )
                })
            }
        </div>
    );
}


