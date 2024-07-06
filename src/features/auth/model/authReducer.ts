import { Dispatch } from 'react'
import { setLoaderAC } from '../../../app/appReducer'
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

/**
 * Asynchronous action creator for logging in a user.
 *
 * @param {LoginParamsType} data - The login parameters including email, password, and optional fields like rememberMe and captcha.
 * @returns A thunk function that performs the login operation and dispatches the appropriate actions.
 *
 * The function attempts to log in the user by calling the `authApi.login` method with the provided data.
 * If the login is successful (resultCode is 0), it dispatches the `isLoggedInAC` action to update the state.
 */
export const logIn = (data: LoginParamsType) => async (dispatch: Dispatch<any>) => {
    dispatch(setLoaderAC('loading'))

    try {
        const res = await authApi.login(data)

        if (res.data.resultCode === 0) {
            dispatch(isLoggedInAC(true))

            dispatch(setLoaderAC('succeeded'))
        }
    } catch (error) {
        console.log(error)
        dispatch(setLoaderAC('failed'))
    }
}

/**
 * Asynchronous action creator for logging out a user.
 *
 * @returns A thunk function that performs the logout operation and dispatches the appropriate actions.
 *
 * The function attempts to log out the user by calling the `authApi.logout` method.
 * If the logout is successful (resultCode is 0), it dispatches the `isLoggedInAC` action to update the state.
 */
export const logOut = () => async (dispatch: Dispatch<any>) => {
    dispatch(setLoaderAC('loading'))

    try {
        const res = await authApi.logout()

        if (res.data.resultCode === 0) {
            dispatch(isLoggedInAC(false))

            dispatch(setLoaderAC('succeeded'))
        }
    } catch (error) {
        console.log(error)
        dispatch(setLoaderAC('failed'))
    }
}

type authActions = ReturnType<typeof isLoggedInAC>

// Actions.
export const isLoggedInAC = (isLoggedIn: boolean) => ({ type: 'IS_LOGGED_IN', isLoggedIn }) as const
