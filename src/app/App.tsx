import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Articles } from '../common/components/articles/Articles'
import { Categories } from '../common/components/categories/Categories'
import { Footer } from '../common/components/footer/Footer'
import { Header } from '../common/components/header/Header'
import { Intro } from '../common/components/intro/Intro'
import LinearIndeterminate from '../common/components/progress-bar/LinearIndeterminate.tsx'
import { ProductTabs } from '../common/components/tabs/product-tabs/ProductTabs'
import { setGamesTC } from '../features/games/model/gamesReducer.ts'
import './App.css'
import { RequestStatusType } from './appReducer.ts'
import { AppRootStateType, useAppDispatch } from './store'

function App() {
    const dispatch = useAppDispatch()
    const loader = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)

    useEffect(() => {
        dispatch(setGamesTC())
    }, [dispatch])

    return (
        <>
            <Header />

            {loader === 'loading' && <LinearIndeterminate />}

            <Intro />
            <Categories />
            <ProductTabs />
            <Articles />
            <Footer />
        </>
    )
}

export default App
