import React from "react";
import "./App.css";
import { Categories } from "./components/categories/Categories.tsx";
import { Header } from "./components/header/Header.tsx";
import { Intro } from "./components/intro/Intro.tsx";
import { useAppDispatch } from "./state/store.ts";
import { setGamesTC } from "./state/gamesReducer.ts";

function App() {
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(setGamesTC());
    }, [])

    return (
        <>
            <Header />
            <Intro />
            <Categories />
        </>
    );
}

export default App;