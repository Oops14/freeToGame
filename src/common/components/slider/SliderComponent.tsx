import {CategoriesGridItem} from '../../../features/category-item/CategoriesGridItem.tsx'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slider.scss'
import Slider from 'react-slick'
import React from 'react'
import {ArticlesItems, Categories} from '../../types/types.ts'
import ArticleItem from '../../../features/article/ArticleItem.tsx'
import style from './sliderComponent.module.scss'

type SliderComponent = {
    elements: Categories[] | ArticlesItems[]
    slidesToShow: number
    categories?: boolean
    articles?: boolean
}

export const SliderComponent: React.FC<SliderComponent> = ({elements, slidesToShow, categories, articles}) => {
    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
    }

    return (
        <>
            <Slider {...sliderSettings}>
                {elements.map((el, index) => {
                    return (
                        <div key={index} className="slider_col">
                            <div className={`slider_col ${ categories && style.category_item_wrapper} ${articles && style.col_slider}`}>
                                    {categories && <CategoriesGridItem title={el.title}/>}
                                    {articles && <ArticleItem/>}
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
