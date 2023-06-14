import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import type {Meta, StoryObj} from '@storybook/react';


import {AddItemForm, AddItemFormPropsType} from '../Wednesday/Todolist12/AddItemForm';
import {action} from '@storybook/addon-actions'
import TextField from '@mui/material/TextField/TextField';
import {IconButton} from '@mui/material';
import {AddBox} from '@mui/icons-material';
import {Task, TaskPropsType} from '../Wednesday/Todolist12/Task';
import {TaskType} from '../Wednesday/Todolist12/Todolist';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Task> = {
    title: 'TODOLISTS/Task',
    component: Task,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // помогает описывать пропсы или ограничить их количество
    // Здесь задаются/ описываются пропсы (также можно использовать ниже)
    args: {
        changeTaskStatus: action('changeTaskStatus'),
        changeTaskTitle: action('changeTaskTitle'),
        removeTask: action('removeTask'),
        task: {id: 'adsw', title: 'JS', isDone: true},
        todolistId: 'afwetg'
    }
};

export default meta;
type Story = StoryObj<typeof Task>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// Story - компонент с определенным набором пропсов
export const TaskIsDoneStory: Story = {
    // args попадают из meta и не нужно дублировать код, см выше
};


export const TaskIsNotDoneStory: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        // переопределили свойство
        task: {id: 'adsw', title: 'CSS', isDone: false}
    }
};

export const TaskWithHook: React.FC<TaskPropsType> = (args) => {
    const [task, setTask] = useState(args.task)

    const changeTaskStatus = () => {
        setTask({...task, isDone: !task.isDone})
    }

    const changeTaskTitle = (taskId: string, title: string) => {
        setTask({...task, title})
    }

    return <Task changeTaskStatus={changeTaskStatus}
                 changeTaskTitle={changeTaskTitle}
                 removeTask={args.removeTask}
                 task={task}
                 todolistId={args.todolistId}
    />
}

export const TaskWithHookStory: Story = {
    render: (args) => <TaskWithHook
        changeTaskStatus={args.changeTaskStatus}
        changeTaskTitle={args.changeTaskTitle}
        removeTask={args.removeTask}
        task={args.task}
        todolistId={args.todolistId}
    />
}


