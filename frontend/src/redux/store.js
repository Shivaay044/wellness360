import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import phyReducer from "./phyReducer/phyReducer";
import exeReducer from "./phyReducer/exeReducer";

const rootReducer = combineReducers({
    //reducers
    phyReducer,
    exeReducer
})


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))