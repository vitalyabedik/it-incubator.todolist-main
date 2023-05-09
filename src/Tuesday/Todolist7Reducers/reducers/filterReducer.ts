import {FilterValuesType} from '../../Todolist7/Lesson7';

export const filterReducer = (state: FilterValuesType, action: ChangeFilterACType): FilterValuesType => {
    switch (action.type) {
        case 'CHANGE-FILTER' : {
            return action.payload.value
        }
        default:
            return state
    }
}


type ChangeFilterACType = ReturnType<typeof ChangeFilterAC>
export const ChangeFilterAC = (value: FilterValuesType) => {
    return {
        type: 'CHANGE-FILTER',
        payload: {
            value
        }
    } as const
}