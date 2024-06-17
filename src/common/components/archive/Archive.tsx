import { Categories } from '../categories/Categories'
import { Header } from '../header/Header'
import line_grid from '../../../assets/line-3-svgrepo-com111.svg'
import grid_3 from '../../../assets/grid-svgrepo-com3.svg'
import grid_4 from '../../../assets/grid-16-svgrepo-com444.svg'
import style from './archive.module.scss'
import { GameGridItem } from '../../../features/games/ui/game-grid/GameGridItem'
import { AppRootStateType, useAppDispatch } from '../../../app/store'
import { GameInitialStateType, GameType } from '../../types/types'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getCategoryGamesTC, setGamesTC } from '../../../features/games/model/gamesReducer.ts'
import { scrollToTop } from '../../utils/scrollToTop'
import { useNavigation } from '../../hooks/useNavigation.ts'
import { GridViewItem } from './archive-grid-view/GridViewItem.tsx'
import { Pagination } from '../pagination/Pagination.tsx'
import { RequestStatusType } from '../../../app/appReducer.ts'
import CircularIndeterminate from '../progress-bar/CircularIndeterminate.tsx'

export const Archive = () => {
    const games = useSelector<AppRootStateType, GameInitialStateType>((state) => state.games)
    const dispatch = useAppDispatch()
    const loader = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)

    const [currentGrid, setCurrentGrid] = useState(() => {
        const grid = localStorage.getItem('grid_view')
        return grid ? JSON.parse(grid) : 'col-lg-4'
    })

    const {
        changePage,
        changeGamesPerPage,
        indexOfFirstGame,
        indexOfLastGame,
        gamesPerPage,
        perPageQuery,
        setGamesPerPage,
        gamesPerPageOptions,
        currentCategory,
    } = useNavigation()

    const [archiveGames, setArchiveGames] = useState<GameType[]>([])

    const changeGridView = (view: string) => {
        setCurrentGrid(view)
    }

    // Fetch all games.
    useEffect(() => {
        dispatch(setGamesTC())
        scrollToTop()
    }, [])

    // Fetch category-specific games when category changes
    useEffect(() => {
        if (currentCategory) dispatch(getCategoryGamesTC(currentCategory))
    }, [dispatch, currentCategory])

    // Update archiveGames state when relevant data changes
    useEffect(() => {
        if (currentCategory) {
            setArchiveGames(games.gamesByCategory.slice(indexOfFirstGame, indexOfLastGame))
        } else {
            setArchiveGames(games.games.slice(indexOfFirstGame, indexOfLastGame))
        }
    }, [currentCategory, games.games, games.gamesByCategory, indexOfFirstGame, indexOfLastGame])

    // Save gamesPerPage to localStorage whenever it changes
    useEffect(() => {
        if (!perPageQuery) {
            setGamesPerPage(gamesPerPageOptions[0])
        }

        localStorage.setItem('gamesPerPage', gamesPerPage.toString())
        localStorage.setItem('grid_view', JSON.stringify(currentGrid))
    }, [gamesPerPage, dispatch, gamesPerPageOptions, perPageQuery, currentGrid])

    return (
        <>
            <Header />
            {/* {currentCategory ? <PageTitle title={currentCategory} /> : <Categories />} */}

            <Categories />

            <div className="product_archive">
                <div className="container">
                    <div className={style.page_tools}>
                        <h3>{currentCategory ? `${currentCategory.toUpperCase()}` : 'All Games'}</h3>
                        <div className={style.tools_inner}>
                            <div className={style.grid_view}>
                                <span>Show: </span>
                                {gamesPerPageOptions.map((option, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`${style.view_grid_item} ${gamesPerPage === option ? style.active_grid : ''}`}
                                            onClick={() => changeGamesPerPage(option)}>
                                            {option}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className={style.grid_view}>
                                <GridViewItem
                                    changeGridView={changeGridView}
                                    class={style.view_grid_item}
                                    img={line_grid}
                                    gridType={'col-lg-12'}
                                    currentGrid={currentGrid}
                                />
                                <GridViewItem
                                    changeGridView={changeGridView}
                                    class={style.view_grid_item}
                                    classImg={style.grid_of_3}
                                    img={grid_3}
                                    gridType={'col-lg-4'}
                                    currentGrid={currentGrid}
                                />
                                <GridViewItem
                                    changeGridView={changeGridView}
                                    class={style.view_grid_item}
                                    classImg={style.grid_of_4}
                                    img={grid_4}
                                    gridType={'col-lg-3'}
                                    currentGrid={currentGrid}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="products">
                        <div className="row">
                            {loader === 'loading' && <CircularIndeterminate />}

                            {currentGrid === 'col-lg-12' && loader === 'succeeded'
                                ? archiveGames.map((game) => {
                                      return (
                                          <div key={game.id} className={currentGrid}>
                                              <GameGridItem
                                                  id={game.id}
                                                  title={game.title}
                                                  img={game.thumbnail}
                                                  dev={game.publisher}
                                                  showButton={false}
                                                  categ={game.genre}
                                                  alternativeDesign={true}
                                              />
                                          </div>
                                      )
                                  })
                                : archiveGames.map((game) => {
                                      return (
                                          <div key={game.id} className={currentGrid}>
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

                    {/*
                     //   TODO: Add styles from the active page number.
                     //   FIXME: Fix the issue with the worng canculation on categories pages.
                     */}
                    {archiveGames.length && (
                        <Pagination className={style.pagination} gamesPerPage={gamesPerPage} changePage={changePage} />
                    )}
                </div>
            </div>
        </>
    )
}
