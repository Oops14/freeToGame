import style from "../productSinglePage.module.scss";
import Slider from "react-slick";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../app/store.ts";
import {GameDetails} from "../../../types/types.ts";

const Description = () => {
    const productInfo = useSelector<AppRootStateType, GameDetails>((state) => state.games.currentGameInfo)

    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    }

    return (
        <div className={style.description}>
            <div className="container">
                <h4>Description</h4>
                <div className={style.desc_images}>
                    {
                        // *
                        // TODO: SET THE SLIDER  VIA COMPONENT.
                        // *
                    }
                    <Slider {...sliderSettings}>
                        {productInfo.screenshots?.map((screen) => {
                            return (
                                <div className={`slider_col ${style.col_image}`} key={screen.id}>
                                    <div className={style.desc_img_item}>
                                        <img src={screen.image} alt="#"/>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>

                <p>{productInfo.description}</p>
            </div>
        </div>
    );
};

export default Description;