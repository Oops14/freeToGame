import RateReviewIcon from '@mui/icons-material/RateReview'
import style from '../../../../common/components/dashboard/dashboard.module.scss'

const Post = () => {
    return (
        <div className={style.post_item}>
            <div className={style.post_block_title}>
                <input type="checkbox" />
                <div className="post_title">
                    <a href="#">Flower Arrangement Tips & Tricks from Floral Experts</a>
                </div>
            </div>
            <div className="author">
                <span>Admin</span>
            </div>
            <div className="categories">Design Tips</div>
            <div className="comments">
                <RateReviewIcon />
            </div>
            <div className="date">
                <span>Published</span>
                2023/06/13 at 1:33 pm
            </div>
        </div>
    )
}

export default Post
