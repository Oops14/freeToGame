import style from "../productSinglePage.module.scss";
import BasicRating from "../../rating/BasicRating.tsx";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../app/store.ts";
import {GameDetails} from "../../../types/types.ts";

const ProductSummary = () => {
    const productInfo = useSelector<AppRootStateType, GameDetails>((state) => state.games.currentGameInfo)

    return (
        <div className={style.product_summary}>
            <div className={style.breadcrumbs}>Home / RPG / {productInfo.title}</div>
            <div className={style.game_title}>{productInfo.title}</div>
            <div className={style.rating}>
                <BasicRating/>
            </div>
            <div className={style.short_description}>{productInfo.short_description}</div>
            <div className={style.game_info}>
                <div className={style.info_item}>
                    <div>Release date</div>
                    <span>{productInfo.release_date}</span>
                </div>
                <div className={style.info_item}>
                    <div>Publisher</div>
                    <span>{productInfo.publisher}</span>
                </div>
                <div className={style.info_item}>
                    <div>Developer</div>
                    <span>{productInfo.developer}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductSummary;