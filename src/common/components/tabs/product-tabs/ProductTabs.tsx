import style from './product-tabs.module.scss'
import { useSelector } from 'react-redux'
import { GameGridItem } from '../../../../features/games/game-grid/GameGridItem.tsx'
import { useEffect, useState } from 'react'
import { RequestStatusType } from '../../../../app/appReducer.ts'
import { useAppDispatch, AppRootStateType } from '../../../../app/store.ts'
import { GameType } from '../../../../features/games/gamesApi.ts'
import { getCategoryGamesTC } from '../../../../features/games/gamesReducer.ts'
import CircularIndeterminate from '../../progress-bar/CircularIndeterminate.tsx'

export const ProductTabs = () => {
    const dispatch = useAppDispatch()
    const loader = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    const categories = [
        { title: 'Shooter' },
        { title: 'Strategy' },
        { title: 'MMORPG' },
        { title: 'Battle Royale' },
        { title: 'MOBA' },
        { title: 'Card Game' },
        { title: 'Sports' },
    ]
    const [activeTab, setActiveTab] = useState(categories[0].title)

    const gamesByCategory = useSelector<AppRootStateType, GameType[]>((state) => state.games.gamesByCategory)
    // Shuffle array of games by category.
    const shuffled = gamesByCategory.slice(0, 6)

    const handleCategoryClick = (categoryTitle: string) => {
        setActiveTab(categoryTitle)
        dispatch(getCategoryGamesTC(categoryTitle))
    }

    useEffect(() => {
        dispatch(getCategoryGamesTC(categories[0].title))
    }, [])

    // **
    // TODO: ADD SLIDER FOR THE PRODUCTS BY CATEGORIES.
    // **
    // TODO: ADD STYLES FOR GRID ITEMS.
    // **
    return (
        <div className={style.product_tabs}>
            <div className="container">
                <div className={style.product_tabs_inner}>
                    <div className={style.categories_block}>
                        <div className={style.tabs_title}>Popular By Category</div>
                        <ul>
                            {categories.map((c, index) => {
                                return (
                                    <li
                                        className={
                                            activeTab === c.title
                                                ? `${style.category_title + ' ' + style.active_tab}`
                                                : style.category_title
                                        }
                                        onClick={() => handleCategoryClick(c.title)}
                                        key={index}>
                                        {c.title}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={style.products_by_categories}>
                        <div className={'row'}>
                            {loader === 'loading' && <CircularIndeterminate />}
                            {loader === 'succeeded' && shuffled.map((g, index) => {
                                return (
                                    <div key={index} className={'col-lg-4'}>
                                        <GameGridItem title={g.title} img={g.thumbnail} dev={g.developer} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
