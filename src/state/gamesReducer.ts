import { Dispatch } from 'react'
import { gamesApi, GameType } from '../api/gamesApi'

// Cases
const SET_GAMES = 'APP/SET-GAMES'
const GET_GAMES = 'APP/GET-CATEGORY-GAMES'

const initialState: InitialStateType = {
    games: [],
    gamesByCategory: [],
}

export type InitialStateType = {
    games: GameType[]
    gamesByCategory: GameType[]
}

export const gamesReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_GAMES:
            return { ...state, games: action.games }
        case GET_GAMES:
            return { ...state, gamesByCategory: action.gamesByCategory }
        default:
            return state
    }
}

type ActionsType = setGamesByCategoryACType | ReturnType<typeof getGamesByCategoryAC>

// Action creators types.
type setGamesByCategoryACType = ReturnType<typeof setGamesAC>

// Actions.
const setGamesAC = (games: GameType[]) => ({ type: SET_GAMES, games }) as const
const getGamesByCategoryAC = (gamesByCategory: GameType[]) => ({ type: GET_GAMES, gamesByCategory }) as const

// Thunks.
export const setGamesTC = () => (dispatch: Dispatch<ActionsType>) => {
    gamesApi
        .getGames()
        .then((res) => {
            dispatch(setGamesAC(res.data))
        })
        .catch((err) => console.log(err))
}

export const getCategoryGamesTC = (category: string) => (dispatch: Dispatch<ActionsType>) => {
    gamesApi
        .gamesByCategory(category)
        .then((res) => {
            dispatch(getGamesByCategoryAC(res.data))
        })
        .catch((err) => alert(err))
}
