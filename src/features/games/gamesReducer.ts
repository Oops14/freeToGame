import { Dispatch } from 'react'
import { setLoaderAC } from '../../app/appReducer'
import { gamesApi } from './gamesApi'
import { GameDetails, GameInitialStateType, GameType } from '../../common/types/types'

// Cases
const SET_GAMES = 'APP/SET-GAMES'
const GET_GAMES = 'APP/GET-CATEGORY-GAMES'
const GET_CURRENT_GAME_INFO = 'APP/GET-CURRENT-GAME-INFO'

const initialState = {
    games: [],
    gamesByCategory: [],
    gameId: null,
    currentGameInfo: {} as GameDetails,
}

export const gamesReducer = (state: GameInitialStateType = initialState, action: ActionsType): GameInitialStateType => {
    switch (action.type) {
        case SET_GAMES:
            return { ...state, games: action.games }
        case GET_GAMES:
            return { ...state, gamesByCategory: action.gamesByCategory }
        case GET_CURRENT_GAME_INFO:
            return { ...state, currentGameInfo: action.data }
        default:
            return state
    }
}

type ActionsType =
    | setGamesByCategoryACType
    | ReturnType<typeof getGamesByCategoryAC>
    | ReturnType<typeof getCurrentGameAC>

// Action creators types.
type setGamesByCategoryACType = ReturnType<typeof setGamesAC>

// Actions.
const setGamesAC = (games: GameType[]) => ({ type: SET_GAMES, games }) as const
export const getGamesByCategoryAC = (gamesByCategory: GameType[]) => ({ type: GET_GAMES, gamesByCategory }) as const
export const getCurrentGameAC = (data: GameDetails) => ({ type: GET_CURRENT_GAME_INFO, data }) as const

/**
 * Thunk action creator to fetch games from the API and dispatch relevant actions.
 *
 * @param {Function} dispatch - The dispatch function from Redux.
 *
 */
export const setGamesTC = () => (dispatch: Dispatch<any>) => {
    dispatch(setLoaderAC('loading'))

    gamesApi
        .getGames()
        .then((res) => {
            dispatch(setGamesAC(res.data))

            dispatch(setLoaderAC('succeeded'))
        })
        .catch((err) => {
            alert(err)
            dispatch(setLoaderAC('failed'))
        })
}

/**
 * Thunk action creator for fetching games by category.
 * It dispatches actions to manage the loading state and handle the response from the API.
 *
 * @param {string} category - The category of games to fetch.
 * @returns {Function} A thunk function that uses dispatch to control the flow of the API call.
 */
export const getCategoryGamesTC = (category: string) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(setLoaderAC('loading'))

        gamesApi
            .gamesByCategory(category)
            .then((res) => {
                dispatch(getGamesByCategoryAC(res.data))

                dispatch(setLoaderAC('succeeded'))
            })
            .catch((err) => {
                alert(err)
                dispatch(setLoaderAC('failed'))
            })
    }
}

/**
 * Thunk action creator for fetching a specific game by its ID.
 * It dispatches actions to manage the loading state and handle the response from the API.
 *
 * @param {number} id - The ID of the game to fetch.
 * @returns {Function} A thunk function that uses dispatch to control the flow of the API call.
 */
export const getGameByIdTC = (id: number) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(setLoaderAC('loading'))

        gamesApi
            .getSpecificGameInfo(id)
            .then((res) => {
                dispatch(getCurrentGameAC(res.data))

                dispatch(setLoaderAC('succeeded'))
            })
            .catch((err) => {
                alert(err)
            })
    }
}
