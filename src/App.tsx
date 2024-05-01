import "./App.css";
import { Categories } from "./components/categories/Categories.tsx";
import { Header } from "./components/header/Header.tsx";
import { Intro } from "./components/intro/Intro.tsx";

function App() {
    return (
        <>
            <Header />
            <Intro />
            <Categories />
        </>
    );
}

export default App;