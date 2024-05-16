import art_img from '../../../assets/articles/1.jpg'
import style from './articleItem.module.scss'

const ArticleItem = () => {
    return (
        <article className={style.article_grid_item}>
            <div className={style.art_img}>
                <img src={art_img} alt="#" />
            </div>
            <div className={style.art_date}>
                <span className={style.art_date_num}>28</span> 
                <span className={style.art_date_mounth}>JUN</span>
            </div>
            <div className={style.article_inner}>
                <div className={style.art_category}>
                    <span>Blog</span>
                </div>
                <h5 className={style.art_title}>
                    Diablo 4 Patch 1.03 Fixes Nightmare Dungeons and the Endgame XP Grind
                </h5>
            </div>
        </article>
    )
}

export default ArticleItem
