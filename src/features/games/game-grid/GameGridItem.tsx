import styles from './gameGridItem.module.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../../app/store.ts'
import { getGameIdAC } from '../gamesReducer.ts'
import BasicRating from '../../../common/components/rating/BasicRating.tsx'
import { ButtonMain } from '../../../common/components/button/ButtonMain.tsx'

type GameGridItem = {
    id?: number
    title: string
    img: string
    dev?: string
    showButton?: boolean
}

export const GameGridItem: React.FC<GameGridItem> = ({ id, title, img, dev, showButton }) => {
    const dispatch = useAppDispatch()

    // const handleTitle = () => {
    //     if (id) dispatch(getGameIdAC(id))
    // }

    return (
        <div>
            <div className={styles.game_grid_item}>
                <div className={styles.grid_image}>
                    <Link to={`/your-repository-name/product-page/${id}`}></Link>
                    <img src={img} alt="#" />
                </div>
                <div className={styles.game_details}>
                    <h5 className={styles.item_grid_title}>
                        <Link to={`/your-repository-name/product-page/${id}`}>
                            {title}
                        </Link>
                    </h5>
                    <div className="stars">
                        <BasicRating />
                    </div>
                    <div className={styles.developer}>{dev}</div>
                    {showButton && <ButtonMain />}
                </div>
            </div>
        </div>
    )
}
