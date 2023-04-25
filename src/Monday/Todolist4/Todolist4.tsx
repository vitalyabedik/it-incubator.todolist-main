import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

import styles from './Todolist4.module.css'

import {FilterValuesType} from './Lesson4';
import {SuperCheckBox} from './components/SuperCheckbox';

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
    addTask: (title: string) => void
    checkBoxStatus: (taskId: string, checkValue: boolean) => void
}

export const Todolist4 = (props: PropsType) => {

    let [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [filterName, setFilterName] = useState('all')

    const addTask = () => {
        if (title.trim() !== '') {
            props.addTask(title.trim());
            setTitle('');
        } else {
            setError('Title is required!')
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => {
        props.changeFilter('all')
        setFilterName('all')
    };
    const onActiveClickHandler = () => {
        props.changeFilter('active')
        setFilterName('active')
    };
    const onCompletedClickHandler = () => {
        props.changeFilter('completed')
        setFilterName('completed')
    };

    // const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     props.checkBoxStatus(t.id, e.currentTarget.checked)
    // }

    const onChangeHandlerInput = (id: string, checked: boolean) => {
        props.checkBoxStatus(id, checked)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input className={error ? styles.error : ''}
                   value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
        </div>
        {error && <div className={error ? styles.errorMessage : ''}>{error}</div>}
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id)
                    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    //     props.checkBoxStatus(t.id, e.currentTarget.checked)
                    // }

                    return <li className={t.isDone ? styles.isDone : ''} key={t.id}>
                        {/*<input type="checkbox" checked={t.isDone} onChange={(e) => onChangeHandlerInput(t.id, e.currentTarget.checked)}/>*/}
                        <SuperCheckBox isDone={t.isDone}
                                       callBack={(newIsDone) => onChangeHandlerInput(t.id, newIsDone)}/>
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={filterName === 'all' ? styles.activeFilter : ''} onClick={onAllClickHandler}>All</button>
            <button className={filterName === 'active' ? styles.activeFilter : ''}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={filterName === 'completed' ? styles.activeFilter : ''}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}
