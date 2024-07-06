import { Dispatch } from 'react'
import { authApi } from '../features/auth/api/authApi'
import { isLoggedInAC } from '../features/auth/model/authReducer'

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState: InitialStateType = {
    status: 'idle',
    error: null,
    isInitializedUser: false,
}

export type InitialStateType = {
    status: RequestStatusType
    error: string | null
    isInitializedUser: boolean
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return { ...state, status: action.status }
        case 'APP/SET-ERROR':
            return { ...state, error: action.error }
        case 'APP/IS_INITIALIZED_USER': {
            return { ...state, isInitializedUser: action.isInitializedUser }
        }
        default:
            return state
    }
}

/**
 * Asynchronous action creator for checking if the user is initialized.
 *
 * This function calls the `authApi.me` method to check if the user is authenticated.
 * If the user is authenticated (resultCode is 0), it dispatches the `isLoggedInAC` action to update the state.
 *
 * @returns A thunk function that performs the initialization check and dispatches the appropriate actions.
 *
 * @param {Dispatch<any>} dispatch - The dispatch function to send actions to the Redux store.
 */
export const isInitializedTC = () => async (dispatch: Dispatch<any>) => {
    dispatch(setLoaderAC('loading'))

    try {
        const res = await authApi.me()

        if (res.data.resultCode === 0) {
            dispatch(isLoggedInAC(true))
            dispatch(isInitializedUserAC(true))

            dispatch(setLoaderAC('succeeded'))
        }
    } catch (error) {
        console.log(error)
        dispatch(setLoaderAC('failed'))
    }
    // finally {
    //     dispatch(isInitializedUserAC(true))
    // }
}

export const setLoaderAC = (status: RequestStatusType) => ({ type: 'APP/SET-STATUS', status }) as const
export const setAppErrorAC = (error: string | null) => ({ type: 'APP/SET-ERROR', error }) as const
export const setAppInitializedAC = (ini: boolean) => ({ type: 'APP/SET-INITIALIZED', ini }) as const

export const isInitializedUserAC = (isInitializedUser: boolean) =>
    ({ type: 'APP/IS_INITIALIZED_USER', isInitializedUser }) as const

type ActionsType =
    | setLoaderACType
    | setAppErrorACType
    | setAppInitializedACType
    | ReturnType<typeof isInitializedUserAC>

export type setLoaderACType = ReturnType<typeof setLoaderAC>
export type setAppErrorACType = ReturnType<typeof setAppErrorAC>
export type setAppInitializedACType = ReturnType<typeof setAppInitializedAC>
