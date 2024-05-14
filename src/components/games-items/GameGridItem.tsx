import styles from './gameGridItem.module.scss'
import BasicRating from '../rating/BasicRating.tsx'
import React from 'react'

type GameGridItem = {
    title: string
    img: string
    dev: string
}

export const GameGridItem: React.FC<GameGridItem> = ({ title, img, dev }) => {
    return (
        <div>
            <div className={styles.game_grid_item}>
                <div className={styles.grid_image}>
                    <a href="#"></a>
                    <img src={img} alt="#" />
                </div>
                <div className={styles.game_details}>
                    <h5 className={styles.item_grid_title}>
                        <a href="#">{title}</a>
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

