import styles from './gameGridItem.module.scss'
import { Link } from 'react-router-dom'
import BasicRating from '../../../../common/components/rating/BasicRating.tsx'
import { ButtonMain } from '../../../../common/components/button/ButtonMain.tsx'
import { useState } from 'react'
import CircularIndeterminate from "../../../../common/components/progress-bar/CircularIndeterminate.tsx";

export type Props = {
    id: number
    title: string
    img: string
    dev?: string
    showButton?: boolean
    categ: string
    alternativeDesign?: boolean
}

export const GameGridItem = ({ id, title, img, dev, showButton, categ, alternativeDesign }: Props) => {
    // Fix the issue with the "-mmorpg" category or categories with double string.
    if (categ.split(' ').join('-').toLowerCase().slice(0, 1) === '-') {
        categ = categ.split(' ').join('-').toLowerCase().substring(1)
    } else {
        categ = categ.split(' ').join('-').toLowerCase()
    }

    const [loading, setLoading] = useState(true)

    // Called when the image successfully loads
    const handleImageLoad = () => {
        setLoading(false)
    }

    return (
        <div className={alternativeDesign ? `${styles.game_grid_item_alternative}` : `${styles.game_grid_item}`}>
            <div className={styles.grid_image}>
                <Link to={`/freeToGame/product-page/${categ}/${id}`}></Link>
                {loading && <CircularIndeterminate />}
                <img
                    src={img}
                    alt="#"
                    onLoad={handleImageLoad}
                    style={loading ? { display: 'none' } : { display: 'block' }}
                />
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
    )
}
