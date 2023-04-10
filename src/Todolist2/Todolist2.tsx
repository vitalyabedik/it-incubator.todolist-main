import React from 'react';
import {filterKeyType} from './AppComponent';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    // ! tasksFilter: (filterKey: filterKeyType) => void
}

export function Todolist2(props: PropsType) {
    let [globalFilterKey, setGlobalFilterKey] = React.useState('All')

    const tasksFilter = (filterKey: filterKeyType) => {
        // засетай filterKEy в globalFilterKey
        setGlobalFilterKey(filterKey)
    }

    const collanderFoo = () => {
        let collander = props.tasks
        if (globalFilterKey === 'Active') {
            collander = props.tasks.filter(task => !task.isDone)
        }
        if (globalFilterKey === 'Completed') {
            collander = props.tasks.filter(task => task.isDone)
        }

        return collander
    }

    const arr = collanderFoo()

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {arr.map(task => {
                return (
                    <li key={task.id}>
                        <button onClick={() => {
                            // скобки слева - скобки справа
                            props.removeTask(task.id)
                        }}>X
                        </button>
                        <input type="checkbox" checked={task.isDone}/>
                        <span>{task.title}</span>
                    </li>
                )
            })}
            {/*<li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>*/}
            {/*<li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>*/}
            {/*<li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>*/}
        </ul>
        <div>
            <button onClick={() => {
                tasksFilter('All')
            }}>All
            </button>
            <button onClick={() => {
                tasksFilter('Active')
            }}>Active
            </button>
            <button onClick={() => {
                tasksFilter('Completed')
            }}>Completed
            </button>
        </div>
    </div>
}
