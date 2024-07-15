import style from "../productSinglePage.module.scss";
import {SliderComponent} from "../../slider/SliderComponent.tsx";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../app/store.ts";
import {GameType} from "../../../types/types.ts";

const RelatedProducts = () => {
    const gamesByCategory = useSelector<AppRootStateType, GameType[]>((state) => state.games.gamesByCategory)
    const simmilarGames = gamesByCategory.sort(() => 0.5 - Math.random()).slice(0, 12)

    return (
        <div className={style.related_products}>
            <div className="container">
                <div
                    style={{
                        marginRight: '-15px',
                        marginLeft: '-15px',
                    }}>
                    <SliderComponent
                        elements={simmilarGames}
                        slidesToShow={4}
                        screenshots={true}
                        slidesToScroll={3}
                    />
                </div>
            </div>
        </div>
    );
};

export default RelatedProducts;