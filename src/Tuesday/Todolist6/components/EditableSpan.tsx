import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    oldTitle: string
    callback: (updateTitle: string) => void
}

export const EditableSpan = (props: PropsType) => {
    const [updateTitle, setUpdateTitle] = useState(props.oldTitle)
    const [edit, setEdit] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUpdateTitle(e.currentTarget.value)
    }

    const addTask = () => {
        props.callback(updateTitle)
    }

    const editHandler = () => {
        setEdit(!edit)
        edit && addTask()
    }

    return (
        edit
            ? <input value={updateTitle} onChange={onChangeHandler} onBlur={editHandler} autoFocus/>
            : <span onDoubleClick={editHandler}>{props.oldTitle}</span>
    );
};

