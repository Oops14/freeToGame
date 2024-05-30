import axios from "axios";

const gamesApiOptions = {
    headers: {
        "X-RapidAPI-Key": "cb69734ba7mshb3bfe3545d6eaefp13ab57jsnf9b34dfd4359",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
};

export type GameType = {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
};

export const gamesApi = {
    getGames() {
        return axios.get<GameType[]>(
            `https://free-to-play-games-database.p.rapidapi.com/api/games`,
            gamesApiOptions
        );
    },
    gamesByCategory(category_name: string) {
        return axios.get<GameType[]>(
            `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category_name}`,
            gamesApiOptions
        );
    },
};
