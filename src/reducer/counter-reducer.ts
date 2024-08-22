export type StateType = {
    counterValue: number
    maxValue: number
    minValue: number
    errorMsgValue: boolean
}

type IncreaseCounterValueAT = ReturnType<typeof increaseCounterValueAC>
type SetErrorMsgAT = {
    type: "SET-ERROR-MSG"
    payload: {
        errorMsgValue: boolean
    }
}

export const increaseCounterValueAC = () => ({
    type: "INCREASE-COUNTER-VALUE"
}) as const
export const setErrorMsgAC = (errorMsgValue: boolean) => ({
    type: "SET-ERROR-MSG",
    payload: {
        errorMsgValue
    }
}) as const

export type ActionTypes = IncreaseCounterValueAT | SetErrorMsgAT

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
        case "SET-ERROR-MSG": {
            const {errorMsgValue} = action.payload
            return {...state, errorMsgValue}
        }
        default:
            return state
    }
}