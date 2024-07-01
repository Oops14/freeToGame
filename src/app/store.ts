import { useDispatch } from 'react-redux'
import { AnyAction, applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { authReducer } from '../features/auth/model/authReducer.ts'
import { gamesReducer } from '../features/games/model/gamesReducer.ts'
import { postReducer } from '../features/posts/model/postReducer.ts'
import { appReducer } from './appReducer.ts'

const rootReducer = combineReducers({
    app: appReducer,
    games: gamesReducer,
    posts: postReducer,
    auth: authReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer>

// Type for Dispatch.
type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AnyAction>

// Typed dispatch.
export const useAppDispatch = useDispatch<AppDispatchType>

// @ts-ignore
window.store = store
