import { useSelector } from 'react-redux'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { AppRootStateType } from '../../../app/store.ts'
import { Post } from '../../../features/posts/model/postReducer.ts'
import { SliderComponent } from '../slider/SliderComponent.tsx'
import style from './articles.module.scss'

export const Articles = () => {
    // Use Pick to create a new type with only the necessary fields from Post
    type PostSummary = Pick<Post, 'date' | 'title' | 'category'>

    const articles = useSelector<AppRootStateType, PostSummary[]>((state) => state.posts.posts)

    return (
        <section className={style.articles_section}>
            <div className="container">
                <h3>Our Latest Articles</h3>
                <div className={style.articles_inner}>
                    <SliderComponent elements={articles} slidesToShow={3} articles={true} slidesToScroll={1} />
                </div>
            </div>
        </section>
    )
}
