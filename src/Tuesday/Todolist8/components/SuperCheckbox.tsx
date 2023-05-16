import React, {ChangeEvent} from 'react';
import {Checkbox} from '@mui/material';

type PropsType = {
    isDone: boolean
    callback: (isDone: boolean) => void
}

export const SuperCheckbox: React.FC<PropsType> = ({isDone, callback}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback(e.currentTarget.checked)
    }

    return (
        <Checkbox
            checked={isDone}
            color="primary"
            onChange={onChangeHandler}
        />
    );
};

