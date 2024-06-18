import BasicRating from '../../../../../common/components/rating/BasicRating.tsx'
import styles from './gameItemMini.module.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import CircularIndeterminate from "../../../../../common/components/progress-bar/CircularIndeterminate.tsx";

type Props = {
    id: number
    title: string
    categ: string
    img: string
    dev: string
}

export const GameItemMini = ({ id, title, img, dev, categ }: Props) => {
    const [loading, setLoading] = useState(true)

    // Called when the image successfully loads
    const handleImageLoad = () => {
        setLoading(false)
    }

    return (
        <div className={styles.game_item_mini}>
            <div className={styles.image}>
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
