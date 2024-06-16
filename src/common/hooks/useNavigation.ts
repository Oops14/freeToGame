import { useState } from 'react'
import { scrollToTop } from '../utils/scrollToTop'
import { useLocation, useNavigate } from 'react-router-dom'

export const useNavigation = () => {
    const gamesPerPageOptions = [12, 21, 33]

    // Read gamesPerPage from localStorage when component mounts
    const [gamesPerPage, setGamesPerPage] = useState(() => {
        const savedGamesPerPage = localStorage.getItem('gamesPerPage')
        return savedGamesPerPage ? parseInt(savedGamesPerPage) : gamesPerPageOptions[0]
    })

    // Navigation.
    const location = useLocation()
    const navigate = useNavigate()
    const query = new URLSearchParams(location.search)
    const pageQuery = query.get('page')
    const perPageQuery = query.get('per_page')

    const [currentPage, setCurrentPage] = useState(pageQuery ? parseInt(pageQuery) : 1)

    const indexOfLastGame = currentPage * gamesPerPage
    const indexOfFirstGame = indexOfLastGame - gamesPerPage

    const currentCategory = query.get('category')


    // Pagination.
    const changePage = (pageNumber: number) => {
        setCurrentPage(pageNumber)
        navigate(`?page=${pageNumber}&per_page=${gamesPerPage}&category=${currentCategory}`)

        scrollToTop()
    }

    const changeGamesPerPage = (number: number) => {
        setGamesPerPage(number)
        navigate(`?page=${currentPage}&per_page=${number}&category=${currentCategory}`)
    }

    return {
        changePage,
        changeGamesPerPage,
        indexOfFirstGame,
        indexOfLastGame,
        gamesPerPage,
        perPageQuery,
        setGamesPerPage,
        gamesPerPageOptions,
    }
}
