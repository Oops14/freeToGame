import ArticleItem from './article/ArticleItem'
import style from './articles.module.scss'

export const Articles = () => {
    return (
        <section className={style.articles_section}>
            <div className="container">
                <div className="articles_inner">
                    <div className="row">
                        <div className="col-lg-4">
                            <ArticleItem />
                        </div>
                        <div className="col-lg-4">
                            <ArticleItem />
                        </div>
                        <div className="col-lg-4">
                            <ArticleItem />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
