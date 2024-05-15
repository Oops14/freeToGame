import style from './product-tabs.module.scss'
import { useSelector } from 'react-redux'
import { AppRootStateType, useAppDispatch } from '../../../state/store.ts'
import { GameType } from '../../../api/gamesApi.ts'
import { getCategoryGamesTC } from '../../../state/gamesReducer.ts'
import { GameGridItem } from '../../games-items/GameGridItem.tsx'
import CircularIndeterminate from '../../../features/progress-bar/CircularIndeterminate.tsx'
import {RequestStatusType} from "../../../state/appReducer.ts";

export const ProductTabs = () => {
    const dispatch = useAppDispatch()
    const loader = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status);

    const categories = [
        { title: 'Shooter' },
        { title: 'Strategy' },
        { title: 'MMORPG' },
        { title: 'Battle Royale' },
        { title: 'MOBA' },
        { title: 'Card Game' },
        { title: 'Sports' },
    ]

    const gamesByCategory = useSelector<AppRootStateType, GameType[]>((state) => state.games.gamesByCategory)
    // Shuffle array of games by category.
    const shuffled = gamesByCategory.slice(0, 6)

    const handleCategoryClick = (categoryTitle: string) => {
        console.log(categoryTitle)
        dispatch(getCategoryGamesTC(categoryTitle))
    }

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
                                        className={style.category_title}
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
                            {shuffled.map((g) => {
                                return (
                                    <div className={'col-lg-4'}>
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
