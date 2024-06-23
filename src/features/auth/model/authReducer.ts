import { Dispatch } from 'react'
import { authApi, LoginParamsType } from '../api/authApi'

type InitialState = {
    isLoggedIn: boolean
}

const InitialState = {
    isLoggedIn: false,
}

export const authReducer = (state: InitialState = InitialState, action: authActions): InitialState => {
    switch (action.type) {
        case 'IS_LOGGED_IN': {
            return { ...state, isLoggedIn: action.isLoggedIn }
        }
        default:
            return state
    }
}

export const logIn = (data: LoginParamsType) => async (dispatch: Dispatch<any>) => {
    try {
        const res = await authApi.login(data)

        if (res.data.resultCode === 0) {
            dispatch(isLoggedInAC(true))
        }

    } catch (error) {
        alert(error)
    }
}

export const isInitialized = () => async (dispatch: Dispatch<any>) => {
    try {
        const res = await authApi.me()

        if (res.data.resultCode === 0) {
            dispatch(isLoggedInAC(true))
        }

    } catch (error) {
        alert(error)
    }
}

type authActions = ReturnType<typeof isLoggedInAC>

// Actions.
export const isLoggedInAC = (isLoggedIn: boolean) => ({ type: 'IS_LOGGED_IN', isLoggedIn }) as const
