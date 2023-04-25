import React from 'react';
import {Todolist2} from './Todolist2';

export type filterKeyType = 'All' | 'Active' | 'Completed'

export const Lesson2 = () => {

    // let tasks = [
    //     {id: 1, title: 'HTML&CSS', isDone: true},
    //     {id: 2, title: 'JS', isDone: true},
    //     {id: 3, title: 'ReactJS', isDone: false}
    // ]

    let [tasks, setTasks] = React.useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false}
    ])


    //будет удалять объект
    const removeTask = (taskId: number) => {
        // tasks = tasks.filter(el => el.id !== taskId)
        // setTasks(tasks)

        setTasks(tasks.filter(el => el.id !== taskId))
    }


    // let [globalFilterKey, setGlobalFilterKey] = React.useState('All')
    // const tasksFilter = (filterKey: filterKeyType) => {
    //     // засетай filterKEy в globalFilterKey
    //     setGlobalFilterKey(filterKey)
    // }
    //
    // let collander = tasks
    //
    // if (globalFilterKey === 'Active') {
    //     collander = tasks.filter(task => !task.isDone)
    // }
    // if (globalFilterKey === 'Completed') {
    //     collander = tasks.filter(task => task.isDone)
    // }

    /* дуршлак
    // let durshlak1 = tasks.filter(task => task.isDone)  // active
    // let durshlak2 = tasks.filter(task => !task.isDone) // completed

    // let collander = tasks
    // // если "Active"
    // collander = tasks.filter(task => task.isDone)
    // // если "Completed"
    // collander = tasks.filter(task => !task.isDone)
    */

    return (
        <div className="App">
            <Todolist2
                title="What to learn"
                tasks={tasks} // !
                removeTask={removeTask}
                // ! tasksFilter={tasksFilter}
            />
        </div>
    );
}


