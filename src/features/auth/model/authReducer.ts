import { Dispatch } from 'react'
import { authApi, LoginParamsType } from '../api/authApi'
import { setLoaderAC } from '../../../app/appReducer'

type InitialState = {
    isLoggedIn: boolean
    isInitializedUser: boolean
}

const InitialState = {
    isLoggedIn: false,
    isInitializedUser: false,
}

export const authReducer = (state: InitialState = InitialState, action: authActions): InitialState => {
    switch (action.type) {
        case 'IS_LOGGED_IN': {
            return { ...state, isLoggedIn: action.isLoggedIn }
        }
        case 'IS_INITIALIZED_USER': {
            return { ...state, isInitializedUser: action.isInitializedUser }
        }
        default:
            return state
    }
}

/**
 * Asynchronous action creator for logging in a user.
 *
 * @param {LoginParamsType} data - The login parameters including email, password, and optional fields like rememberMe and captcha.
 * @returns {Function} A thunk function that performs the login operation and dispatches the appropriate actions.
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
        alert(error)
        dispatch(setLoaderAC('failed'))
    }
}

/**
 * Asynchronous action creator for logging out a user.
 *
 * @returns {Function} A thunk function that performs the logout operation and dispatches the appropriate actions.
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
        alert(error)
        dispatch(setLoaderAC('failed'))
    }
}

/**
 * Asynchronous action creator for checking if the user is initialized.
 *
 * This function calls the `authApi.me` method to check if the user is authenticated.
 * If the user is authenticated (resultCode is 0), it dispatches the `isLoggedInAC` action to update the state.
 *
 * @returns {Function} A thunk function that performs the initialization check and dispatches the appropriate actions.
 *
 * @param {Dispatch<any>} dispatch - The dispatch function to send actions to the Redux store.
 */
export const isInitializedTC = () => async (dispatch: Dispatch<any>) => {
    dispatch(setLoaderAC('loading'))

    try {
        const res = await authApi.me()

        if (res.data.resultCode === 0) {
            dispatch(isLoggedInAC(true))

            dispatch(setLoaderAC('succeeded'))
        }
    } catch (error) {
        alert(error)
        dispatch(setLoaderAC('failed'))
    } finally {
        dispatch(isInitializedUserAC(true))
    }
}

type authActions = ReturnType<typeof isLoggedInAC> | ReturnType< typeof isInitializedUserAC>

// Actions.
export const isLoggedInAC = (isLoggedIn: boolean) => ({ type: 'IS_LOGGED_IN', isLoggedIn }) as const
export const isInitializedUserAC = (isInitializedUser: boolean) => ({ type: 'IS_INITIALIZED_USER', isInitializedUser }) as const
