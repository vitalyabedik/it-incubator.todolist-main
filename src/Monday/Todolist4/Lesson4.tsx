import React, {useState} from 'react';

import {Todolist4} from './Todolist4';
import {v1} from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';

export const Lesson4 = () => {

    let [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Rest API', isDone: false},
        {id: v1(), title: 'GraphQL', isDone: false},
    ]);

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }

    function addTask(title: string) {
        let task = {id: v1(), title: title, isDone: false};
        let newTasks = [task, ...tasks];
        setTasks(newTasks);
    }

    const checkBoxStatus = (taskId: string, checkValue: boolean) => {
        // неверно
        // setTasks([...tasks, tasks.map(el => el.id === taskId ? {...el, el.isDone: checkValue} : el)])

        // {id: v1(), title: 'GraphQL', isDone: false, isDone: checkValue}, -> мы создали новый ключ (перезатираем старый)
        // если видим квадратные скобки -> делаем копию массива
        // если видим фигурные скобки -> делаем копию объекта
        // если нужно поменять значение в объекте -> создаем новый ключ, но с таким же именем -> произойдет замена
        // т.к. метод map, filter создает новый массив (они делают первую копию (shalow copy - поверхностную) -> убираем [...tasks]
        setTasks(tasks.map(el => el.id === taskId ? {...el, isDone: checkValue} : el))
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
            <Todolist4 title="What to learn"
                       tasks={tasksForTodolist}
                       removeTask={removeTask}
                       changeFilter={changeFilter}
                       addTask={addTask}
                       checkBoxStatus={checkBoxStatus}
            />
        </div>
    );
}


