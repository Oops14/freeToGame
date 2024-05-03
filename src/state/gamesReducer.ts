import { Dispatch } from "react";
import { gamesApi, GameType } from "../api/gamesApi";

// Cases
const SET_GAMES = "APP/SET-GAMES";

const initialState: InitialStateType = {
    games: [],
};

export type InitialStateType = {
    games: GameType[];
};

export const gamesReducer = (
    state: InitialStateType = initialState,
    action: ActionsType
): InitialStateType => {
    switch (action.type) {
        case SET_GAMES:
            return { ...state, games: action.games };
        default:
            return state;
    }
};

type ActionsType = setGamesByCategoryACType;

// Action creators types.
type setGamesByCategoryACType = ReturnType<typeof setGamesAC>;

// Actions.
const setGamesAC = (games: GameType[]) => ({ type: SET_GAMES, games } as const);

// Thunks.
export const setGamesTC = () => (dispatch: Dispatch) => {
    gamesApi
        .getGames()
        .then((res) => {
            dispatch(setGamesAC(res.data));
        })
        .catch((err) => console.log(err));
};
