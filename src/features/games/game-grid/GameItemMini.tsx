import BasicRating from '../../../common/components/rating/BasicRating'
import styles from './gameItemMini.module.scss'
import { Link } from 'react-router-dom'
import React from 'react'

type GameItemMini = {
    id: number
    title: string
    categ: string
    img: string
    dev: string
}

export const GameItemMini: React.FC<GameItemMini> = ({ id, title, img, dev, categ }) => {
    return (
        <div className={styles.game_item_mini}>
            <div className={styles.image}>
                <Link to={`/freeToGame/product-page/${categ}/${id}`}></Link>
                <img src={img} alt="#" />
            </div>
            <div className={styles.game_details}>
                <h5 className={styles.item_mini_title}>
                    <Link to={`/freeToGame/product-page/${categ}/${id}`}>{title}</Link>
                </h5>
                <div className="stars">
                    <BasicRating />
                </div>
                <div className={styles.developer}>{dev}</div>
            </div>
        </div>
    )
}
