import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunk, {ThunkDispatch} from "redux-thunk"
import {useDispatch} from "react-redux"
import {appReducer} from "./appReducer.ts";
import { gamesReducer } from './gamesReducer.ts';

const rootReducer = combineReducers({
    app: appReducer,
    games: gamesReducer,
})

// непосредственно создаём store
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// Type for Dispatch.
type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AnyAction>;

// Typed dispatch.
export const useAppDispatch = useDispatch<AppDispatchType>;

// @ts-ignore
window.store = store