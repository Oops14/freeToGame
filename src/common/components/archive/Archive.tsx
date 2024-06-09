import { Categories } from '../categories/Categories'
import { Header } from '../header/Header'
import line_grid from '../../../assets/line-3-svgrepo-com111.svg'
import grid_3 from '../../../assets/grid-svgrepo-com3.svg'
import grid_4 from '../../../assets/grid-16-svgrepo-com444.svg'
import style from './archive.module.scss'
import { GameGridItem } from '../../../features/games/game-grid/GameGridItem'
import { AppRootStateType, useAppDispatch } from '../../../app/store'
import { GameInitialStateType } from '../../types/types'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { setGamesTC } from '../../../features/games/gamesReducer'
import { useLocation, useNavigate } from 'react-router-dom'
import { scrollToTop } from '../../utils/scrollToTop'

export const Archive = () => {
    const games = useSelector<AppRootStateType, GameInitialStateType>((state) => state.games)
    const dispatch = useAppDispatch()

    const gamesPerPageOptions = [12, 21, 33]

    // Read gamesPerPage from localStorage when component mounts
    const [gamesPerPage, setGamesPerPage] = useState(() => {
        const savedGamesPerPage = localStorage.getItem('gamesPerPage');
        return savedGamesPerPage ? parseInt(savedGamesPerPage) : gamesPerPageOptions[0];
    })

    // Navigation.
    const location = useLocation()
    const navigate = useNavigate()
    const query = new URLSearchParams(location.search)
    const pageQuery = query.get('page')

    const [currentPage, setCurrentPage] = useState(pageQuery ? parseInt(pageQuery) : 1)

    const indexOfLastGame = currentPage * gamesPerPage
    const indexOfFirstGame = indexOfLastGame - gamesPerPage
    const currentGames = games.games.slice(indexOfFirstGame, indexOfLastGame)

    // Pagination.
    const changePage = (pageNumber: number) => {
        setCurrentPage(pageNumber)
        navigate(`?page=${pageNumber}&per_page=${gamesPerPage}`);

        scrollToTop()
    }

    const changeGamesPerPage = (number: number) => {
        setGamesPerPage(number)
        navigate(`?page=${currentPage}&per_page=${number}`);
    }

    // Save gamesPerPage to localStorage whenever it changes
    useEffect(() => {
        dispatch(setGamesTC())
        localStorage.setItem('gamesPerPage', gamesPerPage.toString());

        scrollToTop()
    }, [gamesPerPage, dispatch])

    return (
        <>
            <Header />
            <Categories />
            <div className="product_archive">
                <div className="container">
                    <div className={style.page_tools}>
                        <h3>All Games</h3>
                        <div className={style.tools_inner}>
                            <div className={style.grid_view}>
                                <span>Show: </span>
                                {gamesPerPageOptions.map((option) => {
                                    
                                    return (
                                        <div
                                            className={`${style.view_grid_item} ${gamesPerPage === option ? style.active_grid : ''}`}
                                            onClick={() => changeGamesPerPage(option)}>
                                            {option}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className={style.grid_view}>
                                <div className={style.view_grid_item}>
                                    <img src={line_grid} alt="line" />
                                </div>
                                <div className={style.view_grid_item}>
                                    <img className={style.grid_of_3} src={grid_3} alt="line" />
                                </div>
                                <div className={style.view_grid_item}>
                                    <img className={style.grid_of_4} src={grid_4} alt="line" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="products">
                        <div className="row">
                            {currentGames.map((game) => {
                                return (
                                    <div key={game.id} className="col-lg-4">
                                        <GameGridItem
                                            id={game.id}
                                            title={game.title}
                                            img={game.thumbnail}
                                            dev={game.publisher}
                                            showButton={false}
                                            categ={game.genre}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={style.pagination}>
                        {Array(Math.ceil(games.games.length / gamesPerPage))
                            .fill()
                            .map((_, index) => (
                                <button onClick={() => changePage(index + 1)}>{index + 1}</button>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}
