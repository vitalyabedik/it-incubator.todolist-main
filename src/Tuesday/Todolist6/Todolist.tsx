import React, {ChangeEvent} from 'react';
import {FilterValuesType} from './Lesson6';
import {AddItemForm} from './components/AddItemForm';
import {EditableSpan} from './components/EditableSpan';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    filter: FilterValuesType
    updateTask: (todolistId: string, taskId: string, updateTitle: string) => void
    updateTodolistTitle: (todolistId: string, updateTitle: string) => void
}

export function Todolist(props: PropsType) {
    // let [title, setTitle] = useState('')
    // let [error, setError] = useState<string | null>(null)

    // const addTask = () => {
    //     let newTitle = title.trim();
    //     if (newTitle !== '') {
    //         props.addTask(newTitle, props.id);
    //         setTitle('');
    //     } else {
    //         setError('Title is required');
    //     }
    // }

    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.currentTarget.value)
    // }
    //
    // const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    //     setError(null);
    //     if (e.charCode === 13) {
    //         addTask();
    //     }
    // }

    const removeTodolist = () => props.removeTodolist(props.id)

    const onAllClickHandler = () => props.changeFilter('all', props.id);
    const onActiveClickHandler = () => props.changeFilter('active', props.id);
    const onCompletedClickHandler = () => props.changeFilter('completed', props.id);

    const addTaskHandler = (newTitle: string) => {
        props.addTask(newTitle, props.id)
    }

    const updateTaskHandler = (taskId: string, updateTitle: string) => {
        props.updateTask(props.id, taskId, updateTitle)
    }

    const updateTodolistTitleHandler = (updateTitle: string) => {
        props.updateTodolistTitle(props.id, updateTitle)
    }

    return <div>
        <EditableSpan oldTitle={props.title} callback={updateTodolistTitleHandler}/>
        {/*<h3> {props.title}*/}
        {/*    <button onClick={removeTodolist}>x</button>*/}
        {/*</h3>*/}
        <div>
            <AddItemForm callback={addTaskHandler}/>
            {/*<input value={title}*/}
            {/*       onChange={onChangeHandler}*/}
            {/*       onKeyPress={onKeyPressHandler}*/}
            {/*       className={error ? 'error' : ''}*/}
            {/*/>*/}
            {/*<button onClick={addTask}>+</button>*/}
            {/*{error && <div className="error-message">{error}</div>}*/}
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDoneValue, props.id);
                    }

                    // const updateTaskHandler = (updateTitle: string) => {
                    //     props.updateTask(props.id, t.id, updateTitle)
                    // }

                    return <li key={t.id} className={t.isDone ? 'is-done' : ''}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                        <EditableSpan callback={(updateTitle) => updateTaskHandler(t.id, updateTitle)}
                                      oldTitle={t.title}/>
                        {/*<EditableSpan callback={updateTaskHandler} oldTitle={t.title}/>*/}
                        {/*<span>{t.title}</span>*/}
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? 'active-filter' : ''} onClick={onAllClickHandler}>All</button>
            <button className={props.filter === 'active' ? 'active-filter' : ''} onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'completed' ? 'active-filter' : ''}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}


