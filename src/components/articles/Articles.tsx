import Slider from 'react-slick'
import ArticleItem from './article/ArticleItem'
import style from './articles.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Articles = () => {
    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    }

    return (
        <section className={style.articles_section}>
            <div className="container">
                <h3>Our Latest Articles</h3>
                <div className="articles_inner">
                    <Slider {...sliderSettings} className={style.slider_articles}>
                        <div className={`slider_col ${style.col_article}`}>
                            <ArticleItem />
                        </div>
                        <div className={`slider_col ${style.col_article}`}>
                            <ArticleItem />
                        </div>
                        <div className={`slider_col ${style.col_article}`}>
                            <ArticleItem />
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}
