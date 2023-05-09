import {TaskType} from '../../Todolist7/Todolist';
import {v1} from 'uuid';


// здесь будут мозги
export const tasksReducer = (state: TaskType[], action: TsarType): TaskType[] => {
    switch (action.type) {
        case 'REMOVE-TASK' : {
            // let filteredTasks = tasks.filter(t => t.id != id);
            // setTasks(filteredTasks);

            return state.filter(el => el.id !== action.payload.id)
        }
        case 'ADD-TASK' : {
            // let newTasks = [task, ...tasks];
            // setTasks(newTasks);

            let newTask = {
                id: v1(),
                title: action.payload.title,
                isDone: false
            };
            return [newTask, ...state]
        }
        default:
            return state
    }
}

export type TsarType = RemoveTaskACType | AddTaskACType
type RemoveTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (id: string) => {
    return {
        type: 'REMOVE-TASK',  // string, а нам нужна как константа
        payload: {            // чтобы попадать в нужный case
            id
        }
    } as const
}

type AddTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (title: string) => {
    return {
        type: 'ADD-TASK',
        payload: {
            title
        }
    } as const
}