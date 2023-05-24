import {FilterValuesType, TasksStateType, TodolistType} from '../Lesson9';
import {v1} from 'uuid';
import {TaskType} from '../Todolist';
import {AddTodolistActionType, RemoveTodolistActionType} from './todolists-reducer';

export type RemoveTaskActionType = ReturnType<typeof removeTaskAC>
export type AddTaskActionType = ReturnType<typeof addTaskAC>
export type ChangeStatusTaskActionType = ReturnType<typeof changeStatusTaskAC>
export type ChangeTitleTaskActionType = ReturnType<typeof changeTitleTaskAC>


type ActionsType = RemoveTaskActionType
    | AddTaskActionType
    | ChangeStatusTaskActionType
    | ChangeTitleTaskActionType
    | AddTodolistActionType
    | RemoveTodolistActionType

/*
Чистая функция
- иммутабельность - входящие параметры не меняем
- детерменированность/ идемпотентность
- сайд эффекты
 */

export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId]
                    .filter(t => t.id !== action.payload.taskId)
            }
        case 'ADD-TASK':
            let newTask: TaskType = {
                id: v1(),
                title: action.payload.title,
                isDone: false
            }
            return {
                ...state,
                [action.payload.todolistId]: [newTask, ...state[action.payload.todolistId]]
            }
        case 'CHANGE-STATUS-TASK':
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId]
                    .map(t => t.id === action.payload.taskId
                        ? {...t, isDone: action.payload.isDone}
                        : t
                    )
            }
        case 'CHANGE-TITLE-TASK':
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId]
                    .map(t => t.id === action.payload.taskId
                        ? {...t, title: action.payload.title}
                        : t
                    )
            }
        case 'ADD-TODOLIST' :
            return {
                ...state, [action.todolistId]: []
            }
        case 'REMOVE-TODOLIST' :
            // delete state[action.id]
            // return {...state}

            let {[action.id]: [], ...rest} = state
            return rest

        default:
            throw new Error('I don\'t understand this type')
    }
}

export const removeTaskAC = (taskId: string, todolistId: string) => {
    return {
        type: 'REMOVE-TASK',
        payload: {
            taskId,
            todolistId
        }
    } as const
}

export const addTaskAC = (title: string, todolistId: string) => {
    return {
        type: 'ADD-TASK',
        payload: {
            title,
            todolistId
        }
    } as const
}

export const changeStatusTaskAC = (taskId: string, isDone: boolean, todolistId: string) => {
    return {
        type: 'CHANGE-STATUS-TASK',
        payload: {
            isDone,
            taskId,
            todolistId
        }
    } as const
}

export const changeTitleTaskAC = (taskId: string, title: string, todolistId: string) => {
    return {
        type: 'CHANGE-TITLE-TASK',
        payload: {
            title,
            taskId,
            todolistId
        }
    } as const
}
