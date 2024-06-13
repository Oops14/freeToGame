import BasicRating from '../../common/components/rating/BasicRating.tsx'
import style from './review.module.scss'

export const Review = () => {
    return (
        <div className={style.review}>
            <div className={style.user_name}>Ema Norton</div>
            <div className={style.rating}>
                <BasicRating />
            </div>
            <div className={style.comment}>
                I’ve heard the argument that “lorem ipsum” is effective in wireframing or design because it helps people
                focus on the actual layout, or color scheme, or whatever. The entire structure of the page or app flow
                is FOR THE WORDS.
            </div>
        </div>
    )
}
