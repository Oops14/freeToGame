import style from "../productSinglePage.module.scss";
import advant_img from "../../../../assets/product-page/1.svg";
import advant_img2 from "../../../../assets/product-page/2.jpeg";
import advant_img3 from "../../../../assets/product-page/3.svg";
import advant_img4 from "../../../../assets/product-page/4.svg";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../app/store.ts";
import {GameDetails} from "../../../types/types.ts";

const ProductAdditionalInfo = () => {
    const productInfo = useSelector<AppRootStateType, GameDetails>((state) => state.games.currentGameInfo)

    return (
        <div className={style.additional_info}>
            <div className={style.additional_info_item}>
                <div className={style.additional_info_item_img}>
                    <img src={advant_img} alt="#"/>
                </div>
                <span className={style.info_title}>{productInfo.genre}</span>
            </div>
            <div className={style.additional_info_item}>
                <div className={style.additional_info_item_img}>
                    <img src={advant_img2} alt="#"/>
                </div>
                <span className={style.info_title}>
                                        Mild Language, <span>Violence</span>
                                    </span>
            </div>
            <div className={style.additional_info_item}>
                <div className={style.additional_info_item_img}>
                    <img src={advant_img3} alt="#"/>
                </div>
                <span className={style.info_title}>12 Support language</span>
            </div>
            <div className={style.additional_info_item}>
                <div className={style.additional_info_item_img}>
                    <img src={advant_img4} alt="#"/>
                </div>
                <span className={style.info_title}>Single Player</span>
            </div>
        </div>
    );
};

export default ProductAdditionalInfo;