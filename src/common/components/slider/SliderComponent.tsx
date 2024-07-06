import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { CategoriesGridItem } from '../../../features/category-item/CategoriesGridItem.tsx'
import { GameGridItem } from '../../../features/games/ui/game-grid/GameGridItem.tsx'
import { Post } from '../../../features/posts/model/postReducer.ts'
import ArticleItem from '../../../features/posts/ui/ArticleItem.tsx'
import { Categories, GameType } from '../../types/types.ts'
import './slider.scss'
import style from './sliderComponent.module.scss'

export type PostSummary = Pick<Post, 'date' | 'title' | 'category' | 'mounth' | 'img'>

type Props = {
    elements: Categories[] | PostSummary[] | GameType[]
    slidesToShow: number
    categories?: boolean
    articles?: boolean
    screenshots?: boolean
    slidesToScroll: number
}

export const SliderComponent = ({
    elements,
    slidesToShow,
    categories,
    articles,
    screenshots,
    slidesToScroll,
}: Props) => {
    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
    }

    return (
        <>
            <Slider {...sliderSettings}>
                {elements.map((el, index) => {
                    return (
                        <div key={index} className="slider_col">
                            <div
                                className={` 
                            ${categories ? style.category_item_wrapper : ''} 
                            ${articles ? style.col_slider : ''}
                            ${screenshots ? style.screenshots : ''}
                            `}>
                                {categories && <CategoriesGridItem title={el.title} />}
                                {articles && (
                                    <ArticleItem
                                        date={(el as PostSummary).date.split(' ')[0]}
                                        title={(el as PostSummary).title}
                                        category={(el as PostSummary).category}
                                        mounth={(el as PostSummary).date.split(' ')[1]}
                                        img={(el as PostSummary).img}
                                    />
                                )}
                                {screenshots && 'thumbnail' in el && (
                                    <GameGridItem
                                        id={el.id}
                                        title={el.title}
                                        img={el.thumbnail}
                                        dev={el.developer}
                                        categ={el.genre}
                                        showButton={true}
                                    />
                                )}
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </>
    )
}

// <div className={`slider_col ${style.col_article}`}>
//     <ArticleItem/>
// </div>
