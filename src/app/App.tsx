import React, { useEffect } from 'react'
import './App.css'
import { Header } from '../common/components/header/Header'
import { Articles } from '../common/components/articles/Articles'
import { Categories } from '../common/components/categories/Categories'
import { Footer } from '../common/components/footer/Footer'
import { Intro } from '../common/components/intro/Intro'
import { ProductTabs } from '../common/components/tabs/product-tabs/ProductTabs'
import { setGamesTC } from '../features/games/model/gamesReducer.ts'
import { AppRootStateType, useAppDispatch } from './store'
import { isInitializedTC } from '../features/auth/model/authReducer.ts'
import { CircularProgress } from '@mui/material'
import { useSelector } from 'react-redux'


function App() {
    const dispatch = useAppDispatch()
    const isInitializedUser = useSelector<AppRootStateType, boolean>(state => state.auth.isInitializedUser)

    React.useEffect(() => {
        dispatch(setGamesTC())
    }, [])

    useEffect(() => {
        dispatch(isInitializedTC())
    }, [])

    if (!isInitializedUser) {
        return (
            <div style={{ position: 'fixed', top: '30%', textAlign: 'center', width: '100%' }}>
                <CircularProgress />
            </div>
        )
    }

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
