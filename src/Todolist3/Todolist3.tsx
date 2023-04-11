import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './Lesson3';
import {Button} from './components/Button';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (newTitle: string) => void
}

export const Todolist3 = (props: PropsType) => {
    const [newTitle, setNewTitle] = useState('')

    const addTaskHandler = () => {
        props.addTask(newTitle)
        setNewTitle('')
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const onKeyDownPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTaskHandler()
        }
    }

    // const changeFilterAllHandler = () => {
    //     props.changeFilter('all')
    // }
    //
    // const changeFilterActiveHandler = () => {
    //     props.changeFilter('active')
    // }
    //
    // const changeFilterCompletedHandler = () => {
    //     props.changeFilter('completed')
    // }

    const tsarChangeFilterHandler = (filterValue: FilterValuesType) => {
        props.changeFilter(filterValue)
    }

    // removeTask за пределами JSX
    const removeTaskHandler = (id: string) => {
        props.removeTask(id)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                type="text"
                value={newTitle}
                onChange={onChangeHandler}
                // onKeyPress устарел
                onKeyDown={onKeyDownPressHandler}
            />
            {/*<button onClick={addTaskHandler}>+</button>*/}
            <Button name={'+'} callback={addTaskHandler}/>
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    // removeTask в пределах map
                    // const removeTaskHandler = () => {
                    //     props.removeTask(t.id)
                    // }

                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            {/*<button onClick={() => removeTaskHandler(t.id)}>x</button>*/}
                            <Button name={'x'} callback={() => removeTaskHandler(t.id)}/>
                        </li>
                    )
                })
            }
        </ul>
        <div>
            {/*<button onClick={() => tsarChangeFilterHandler('all')}>All</button>*/}
            {/*<button onClick={() => tsarChangeFilterHandler('active')}>Active</button>*/}
            {/*<button onClick={() => tsarChangeFilterHandler('completed')}>Completed</button>*/}
            <Button name={'All'} callback={() => tsarChangeFilterHandler('all')}/>
            <Button name={'Active'} callback={() => tsarChangeFilterHandler('active')}/>
            <Button name={'Completed'} callback={() => tsarChangeFilterHandler('completed')}/>

            {/*<button onClick={tsarChangeFilterHandler()}>All</button>*/}
            {/*<button onClick={changeFilterActiveHandler}>Active</button>*/}
            {/*<button onClick={changeFilterCompletedHandler}>Completed</button>*/}

            {/*<button onClick={() => {props.changeFilter('all')}}>Active</button>*/}
        </div>
    </div>
}
