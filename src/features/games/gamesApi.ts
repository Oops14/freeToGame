import axios from 'axios'
import { GameDetails, GameType } from '../../common/types/types'

const gamesApiOptions = {
    headers: {
        'X-RapidAPI-Key': 'cb69734ba7mshb3bfe3545d6eaefp13ab57jsnf9b34dfd4359',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    },
}

export const gamesApi = {
    getGames() {
        return axios.get<GameType[]>(`https://free-to-play-games-database.p.rapidapi.com/api/games`, gamesApiOptions)
    },
    gamesByCategory(category_name: string) {
        return axios.get<GameType[]>(
            `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category_name}`,
            gamesApiOptions
        )
    },
    getSpecificGameInfo(id: number) {
        return axios.get<GameDetails>(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, gamesApiOptions)
    },
}
