import styles from './gameGridItem.module.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../../app/store.ts'
import { getGameTitleAC } from '../gamesReducer.ts'
import BasicRating from '../../../common/components/rating/BasicRating.tsx'

type GameGridItem = {
    title: string
    img: string
    dev: string
}

export const GameGridItem: React.FC<GameGridItem> = ({ title, img, dev }) => {
    const dispatch = useAppDispatch();

    const handleTitle = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        dispatch(getGameTitleAC(e.currentTarget.innerText))
    }

    return (
        <div>
            <div className={styles.game_grid_item}>
                <div className={styles.grid_image}>
                    <Link onClick={handleTitle} to="/your-repository-name/product-page"></Link>
                    <img src={img} alt="#" />
                </div>
                <div className={styles.game_details}>
                    <h5 className={styles.item_grid_title}>
                        <Link onClick={handleTitle} to="/your-repository-name/product-page">
                            {title}
                        </Link>
                    </h5>
                    <div className="stars">
                        <BasicRating />
                    </div>
                    <div className={styles.developer}>{dev}</div>
                </div>
            </div>
        </div>
    )
}
