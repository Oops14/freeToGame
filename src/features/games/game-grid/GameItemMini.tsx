import BasicRating from '../../../common/components/rating/BasicRating';
import styles from "./gameItemMini.module.scss";

type GameItemMini = {
    title: string
    img: string
    dev: string
}

export const GameItemMini: React.FC<GameItemMini> = ({title, img, dev}) => {
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
