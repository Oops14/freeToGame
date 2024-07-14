import BasicRating from '../../../common/components/rating/BasicRating.tsx'
import style from './review.module.scss'

type Props = {
    user: string
    comment: string
}

export const Review = ({ user, comment }: Props) => {
    return (
        <div className={style.review}>
            <div className={style.user_name}>{user}</div>
            <div className={style.rating}>
                <BasicRating />
            </div>
            <div className={style.comment}>{comment}</div>
        </div>
    )
}
