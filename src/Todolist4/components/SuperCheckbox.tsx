import React, {ChangeEvent} from 'react';

type PropsType = {
    callBack: (isChecked: boolean) => void
    isDone: boolean
}

export const SuperCheckBox = (props: PropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(e.currentTarget.checked)
    }
    return (
        <input type="checkbox" onChange={onChangeHandler} checked={props.isDone}/>
    );
};