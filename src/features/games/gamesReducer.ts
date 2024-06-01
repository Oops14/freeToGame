import { Dispatch } from 'react'
import { setLoaderAC } from '../../app/appReducer'
import { gamesApi } from './gamesApi'
import { GameDetails, GameInitialStateType, GameType } from '../../common/types/types'


const defaultDetails = {
    id: 380,
    title: 'Dark Orbit Reloaded',
    thumbnail: 'https://www.freetogame.com/g/380/thumbnail.jpg',
    status: 'Live',
    short_description: 'A browser-based 3D space-combat MMO with a massive playerbase!',
    description:
        'Dark Orbit Reloaded is a browser based 3d space-combat MMO with a massive playerbase and endless customization. originally launched in 2006, Dark Orbit was recently revamped with 3d graphics, new interface and new maps.\r\n\r\nBigpoint games give players the freedom to explore the vast cosmos and engage in fierce PvP combat across the stars. Players in DarkOrbit will start by choosing a company to work for \u2013 the Earth Industries Corporation, the Mars Mining Operations, or the Venus Resources Unlimited \u2013 and carry out their work throughout the galaxy. Each corporation has their own unique view, base of operations, and the players within each are as varied as the stars.\r\n\r\nIn DarkOrbit, players from rival factions won\u2019t be your only threat. Aliens prowl among the planets and you must fight them in order to thrive and survive for your sake and the company whose banner you operate under.\r\n\r\nThough DarkOrbit only features ten different models of spaceship, the options to customize them are only as limited as you want them to be. Fight to obtain wealth and upgrade your vessel in order to decimate other players in pitched PvP game modes.\r\n\r\nChoose your faction and ready your spaceship\u2019s thrusters and weapons in DarkOrbit. The galaxy is waiting for you to conquer it, but only the most cunning and well-equipped will succeed.',
    game_url: 'https://www.freetogame.com/open/darkorbit',
    genre: 'Shooter',
    platform: 'Web Browser',
    publisher: 'Bigpoint',
    developer: 'Bigpoint',
    release_date: '2006-12-11',
    freetogame_profile_url: 'https://www.freetogame.com/darkorbit',
    screenshots: [
        {
            id: 974,
            image: 'https://www.freetogame.com/g/380/DarkOrbit-Reloaded-screenshots-1.jpg',
        },
        {
            id: 975,
            image: 'https://www.freetogame.com/g/380/DarkOrbit-Reloaded-screenshots-2.jpg',
        },
        {
            id: 976,
            image: 'https://www.freetogame.com/g/380/DarkOrbit-Reloaded-screenshots-3.jpg',
        },
        {
            id: 977,
            image: 'https://www.freetogame.com/g/380/DarkOrbit-Reloaded-screenshots-4.jpg',
        },
    ],
}

// Cases
const SET_GAMES = 'APP/SET-GAMES'
const GET_GAMES = 'APP/GET-CATEGORY-GAMES'
const GET_GAME_ID = 'APP/GET-GAME-ID'
const GET_CURRENT_GAME_INFO = 'APP/GET-CURRENT-GAME-INFO'


const initialState: GameInitialStateType = {
    games: [],
    gamesByCategory: [],
    gameId: null,
    currentGameInfo: defaultDetails,
}

export const gamesReducer = (state: GameInitialStateType = initialState, action: ActionsType): GameInitialStateType => {
    switch (action.type) {
        case SET_GAMES:
            return { ...state, games: action.games }
        case GET_GAMES:
            return { ...state, gamesByCategory: action.gamesByCategory }
        case GET_GAME_ID:
            return { ...state, gameId: action.id }
        case GET_CURRENT_GAME_INFO:
            return { ...state, currentGameInfo: action.data }
        default:
            return state
    }
}

type ActionsType =
    | setGamesByCategoryACType
    | ReturnType<typeof getGamesByCategoryAC>
    | ReturnType<typeof getGameIdAC>
    | ReturnType<typeof getCurrentGameAC>

// Action creators types.
type setGamesByCategoryACType = ReturnType<typeof setGamesAC>

// Actions.
const setGamesAC = (games: GameType[]) => ({ type: SET_GAMES, games }) as const
const getGamesByCategoryAC = (gamesByCategory: GameType[]) => ({ type: GET_GAMES, gamesByCategory }) as const
export const getGameIdAC = (id: number) => ({ type: GET_GAME_ID, id }) as const
export const getCurrentGameAC = (data: GameDetails) => ({ type: GET_CURRENT_GAME_INFO, data }) as const

/**
 * Thunk action creator to fetch games from the API and dispatch relevant actions.
 *
 * @param {Function} dispatch - The dispatch function from Redux.
 *
 * It first dispatches an action to set the loader status to 'loading'.
 * Then it makes an API call to fetch games.
 * If the API call is successful, it dispatches an action to set the games with the received data and sets the loader status to 'succeeded'.
 * If the API call fails, it alerts the error and dispatches an action to set the loader status to 'failed'.
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
export const getCategoryGamesTC = (category: string) => (dispatch: Dispatch<any>) => {
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

/**
 * Thunk action creator for fetching a specific game by its ID.
 * It dispatches actions to manage the loading state and handle the response from the API.
 *
 * @param {number} id - The ID of the game to fetch.
 * @returns {Function} A thunk function that uses dispatch to control the flow of the API call.
 */
export const getGameByIdTC = (id: number) => (dispatch: Dispatch<any>) => {
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