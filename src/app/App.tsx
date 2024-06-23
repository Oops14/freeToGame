import React, { useEffect } from 'react'
import './App.css'
import { Header } from '../common/components/header/Header'
import { Articles } from '../common/components/articles/Articles'
import { Categories } from '../common/components/categories/Categories'
import { Footer } from '../common/components/footer/Footer'
import { Intro } from '../common/components/intro/Intro'
import { ProductTabs } from '../common/components/tabs/product-tabs/ProductTabs'
import { setGamesTC } from '../features/games/model/gamesReducer.ts'
import { useAppDispatch } from './store'
import { isInitialized } from '../features/auth/model/authReducer.ts'


function App() {
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        dispatch(setGamesTC())
    }, [])

    useEffect(() => {
        dispatch(isInitialized())
    }, [])

    return (
        <>
            <Header />
            <Intro />
            <Categories />
            <ProductTabs />
            <Articles />
            <Footer />
        </>
    )
}

export default App
