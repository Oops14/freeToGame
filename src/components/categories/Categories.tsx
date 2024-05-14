import { CategoriesGridItem } from "./category-item/CategoriesGridItem";
import style from "./categories.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.scss';
import Slider from "react-slick";

export const Categories = () => {
    const categories = [
        { title: "Shooter" },
        { title: "Strategy" },
        { title: "MMORPG" },
        { title: "Battle Royale" },
        { title: "MOBA" },
        { title: "Card Game" },
        { title: "Sports" },
    ];

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
    };

    return (
        <section className={style.categories}>
            <div className="container">
                <div className={style.slider}>

                    {/* TODO: CHANGE THE ARROWS FOR THE SLIDER. */}
                    <Slider {...settings}>
                        {categories.map((categ, index) => {
                            return (
                                <div key={index} className="slider_col">
                                    <div
                                        className={style.category_item_wrapper}
                                    >
                                        <CategoriesGridItem
                                            title={categ.title}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    );
};