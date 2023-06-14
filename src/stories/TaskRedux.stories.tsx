import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import type {Meta, StoryObj} from '@storybook/react';


import {ReduxStoreProviderDecorator} from '../Wednesday/Todolist12/state/ReduxStoreProviderDecorator';
import {TaskRedux} from '../Wednesday/Todolist12/TaskRedux';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../Wednesday/Todolist12/state/store';
import {TaskType} from '../Wednesday/Todolist12/Todolist';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof TaskRedux> = {
    title: 'TODOLISTS/TaskRedux',
    component: TaskRedux,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    decorators: [ReduxStoreProviderDecorator]
};

export default meta;
type Story = StoryObj<typeof TaskRedux>;

// делаем прокладку и она помогает
const TaskReduxWrap = () => {
    const todolistID = 'todolistId1'
    const task = useSelector<AppRootStateType, TaskType>(state => state.tasks[todolistID][0])
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    return <TaskRedux task={task} todolistID={todolistID}/>
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// Story - компонент с определенным набором пропсов
export const TaskReduxStory: Story = {
    render: () => <TaskReduxWrap/>
};

