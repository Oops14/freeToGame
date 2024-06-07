import style from './articles.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { SliderComponent } from '../slider/SliderComponent.tsx'

export const Articles = () => {
    const articles = [
        {
            date: 28,
            mounth: 'JUN',
            title: 'Diablo 4 Patch 1.03 Fixes Nightmare Dungeons and the Endgame XP Grind',
        },
        {
            date: 28,
            mounth: 'JUN',
            title: 'Diablo 4 Patch 1.03 Fixes Nightmare Dungeons and the Endgame XP Grind',
        },
        {
            date: 28,
            mounth: 'JUN',
            title: 'Diablo 4 Patch 1.03 Fixes Nightmare Dungeons and the Endgame XP Grind',
        },
    ]

    return (
        <section className={style.articles_section}>
            <div className="container">
                <h3>Our Latest Articles</h3>
                <div className={style.articles_inner}>
                    <SliderComponent elements={articles} slidesToShow={3} articles={true} slidesToScroll={1}/>
                </div>
            </div>
        </section>
    )
}
