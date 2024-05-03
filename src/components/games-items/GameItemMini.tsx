import game_item_mini from "../../assets/intro/2.jpeg";
import BasicRating from "../rating/BasicRating";
import styles from "./gameItemMini.module.scss";

type GameItemMiniType = {
    title: string
    img: string
    dev: string
}

export const GameItemMini: React.FC<GameItemMiniType> = ({title, img, dev}) => {
    return (
        <div className={styles.game_item_mini}>
            <div className={styles.image}>
                <a href="#"></a>
                <img src={img} alt="#" />
            </div>
            <div className={styles.game_details}>
                <h5 className={styles.item_mini_title}>
                    <a href="#">{title}</a>
                </h5>
                <div className="stars">
                    <BasicRating />
                </div>
                <div className={styles.developer}>{dev}</div>
            </div>
        </div>
    );
};
