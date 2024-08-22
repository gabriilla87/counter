export type StateType = {
    counterValue: number
    maxValue: number
    minValue: number
    errorMsgValue: boolean
}

type IncreaseCounterValueAT = ReturnType<typeof increaseCounterValueAC>
type SetErrorMsgAT = ReturnType<typeof setErrorMsgAC>
type SetCounterValueAT = ReturnType<typeof setCounterValueAC>
type SetMaxValueAT = ReturnType<typeof setMaxValueAC>
type SetMinValueAT = ReturnType<typeof setMinValueAC>

export const increaseCounterValueAC = () => ({
    type: "INCREASE-COUNTER-VALUE"
}) as const
export const setErrorMsgAC = (errorMsgValue: boolean) => ({
    type: "SET-ERROR-MSG",
    payload: {
        errorMsgValue
    }
}) as const
export const setCounterValueAC = (value: number) => ({
    type: "SET-COUNTER-VALUE",
    payload: {
        value
    }
}) as const
export const setMaxValueAC = (value: number) => ({
    type: "SET-MAX-VALUE",
    payload: {
        value
    }
}) as const
export const setMinValueAC = (value: number) => ({
    type: "SET-MIN-VALUE",
    payload: {
        value
    }
}) as const

export type ActionTypes = IncreaseCounterValueAT | SetErrorMsgAT | SetCounterValueAT | SetMaxValueAT | SetMinValueAT

// const initialState: StateType = {
//     counterValue: 0,
//     maxValue: 5,
//     minValue: 0,
//     errorMsgValue: null
// }

export const counterReducer = (state: StateType, action: ActionTypes): StateType => {
    switch(action.type) {
        case "INCREASE-COUNTER-VALUE": {
            const {counterValue, maxValue} = state
            return counterValue < maxValue ? {...state, counterValue : counterValue + 1} : state
        }
        case "SET-COUNTER-VALUE": {
            return {...state, counterValue: action.payload.value}
        }
        case "SET-ERROR-MSG": {
            const {errorMsgValue} = action.payload
            return {...state, errorMsgValue}
        }
        case "SET-MAX-VALUE": {
            return {...state, maxValue: action.payload.value}
        }
        case "SET-MIN-VALUE": {
            return {...state, minValue: action.payload.value}
        }
        default:
            return state
    }
}