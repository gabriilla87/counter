import {combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer} from "./counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer)

type AppRootStateType = ReturnType<typeof rootReducer>