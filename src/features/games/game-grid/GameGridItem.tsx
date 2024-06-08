import styles from './gameGridItem.module.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import BasicRating from '../../../common/components/rating/BasicRating.tsx'
import { ButtonMain } from '../../../common/components/button/ButtonMain.tsx'

export type GameGridItem = {
    id: number
    title: string
    img: string
    dev?: string
    showButton?: boolean
    categ: string
}

export const GameGridItem: React.FC<GameGridItem> = ({ id, title, img, dev, showButton, categ }) => {
    categ = categ.split(' ').join('-').toLowerCase()

    return (
        <div>
            <div className={styles.game_grid_item}>
                <div className={styles.grid_image}>
                    <Link to={`/freeToGame/product-page/${categ}/${id}`}></Link>
                    <img src={img} alt="#" />
                </div>
                <div className={styles.game_details}>
                    <h5 className={styles.item_grid_title}>
                        <Link to={`/freeToGame/product-page/${categ}/${id}`}>{title}</Link>
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
