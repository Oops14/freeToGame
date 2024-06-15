import { CategoriesGridItem } from '../../../features/category-item/CategoriesGridItem.tsx'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slider.scss'
import Slider from 'react-slick'
import { ArticlesItems, Categories, GameType } from '../../types/types.ts'
import ArticleItem from '../../../features/article/ui/ArticleItem.tsx'
import style from './sliderComponent.module.scss'
import { GameGridItem } from '../../../features/games/ui/game-grid/GameGridItem.tsx'

type Props = {
    elements: Categories[] | ArticlesItems[] | GameType[]
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
                                {articles && <ArticleItem />}
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
