import BasicRating from '../../rating/BasicRating'
import style from '../productSinglePage.module.scss'

const ReviewRating = () => {
    return (
        <div className={style.reviews_counter}>
            <div className={style.avarage_rating}>4</div>
            <div className="rating">
                <BasicRating />
            </div>
            <div className="couner_item">2 reviews</div>
        </div>
    )
}

export default ReviewRating
