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

export type GameInitialStateType = {
    games: GameType[]
    gamesByCategory: GameType[]
    gameId: number | null
    currentGameInfo: GameDetails
}

export type GameDetails = {
    id: number;
    title: string;
    thumbnail: string;
    status: string;
    short_description: string;
    description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
    minimum_system_requirements?: {
        os: string;
        processor: string;
        memory: string;
        graphics: string;
        storage: string;
    };
    screenshots: {
        id: number;
        image: string;
    }[];
};

export type Categories = {
    title: string
}

export type ArticlesItems = {
    date: number
    mounth: string
    title: string
}