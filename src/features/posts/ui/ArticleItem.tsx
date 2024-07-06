import { PostSummary } from '../../../common/components/slider/SliderComponent'
import style from './articleItem.module.scss'

const ArticleItem = ({ date, title, category, mounth, img }: PostSummary) => {
    if (!img.includes('/')) {
        img = `/freeToGame/src/assets/articles/${img}`
    }

    return (
        <article className={style.article_grid_item}>
            <div className={style.art_img}>
                <img src={img} alt="#" />
            </div>
            <div className={style.art_date}>
                <span className={style.art_date_num}>{date}</span>
                <span className={style.art_date_mounth}>{mounth}</span>
            </div>
            <div className={style.article_inner}>
                <div className={style.art_category}>
                    <span>{category}</span>
                </div>
                <h5 className={style.art_title}>{title}</h5>
            </div>
        </article>
    )
}

export default ArticleItem
