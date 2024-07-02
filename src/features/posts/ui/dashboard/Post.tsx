import RateReviewIcon from '@mui/icons-material/RateReview'
import style from '../../../../common/components/dashboard/dashboard.module.scss'

type Post = {
    title: string
    category: string
    date: string
}

const Post = ({ title, category, date }: Post) => {
    return (
        <div className={style.post_item}>
            <div className={style.post_block_title}>
                <input type="checkbox" />
                <div className="post_title">
                    <a href="#">{title}</a>
                </div>
            </div>
            <div className="author">
                <span>Admin</span>
            </div>
            <div className={style.categories}>{category}</div>
            <div className="comments">
                <RateReviewIcon />
            </div>
            <div className={style.date}>
                <span>Published: </span>
                <span> {date} </span>
            </div>
        </div>
    )
}

export default Post
