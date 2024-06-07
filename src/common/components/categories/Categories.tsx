import style from './categories.module.scss'
import { SliderComponent } from '../slider/SliderComponent.tsx'

export const Categories = () => {
    const categories = [
        { title: 'Shooter' },
        { title: 'Strategy' },
        { title: 'MMORPG' },
        { title: 'MOBA' },
        { title: 'Sports' },
    ]

    return (
        <section className={style.categories}>
            <div className="container">
                <div className={style.slider}>
                    <SliderComponent elements={categories} slidesToShow={5} categories={true} slidesToScroll={1}/>
                </div>
            </div>
        </section>
    )
}
