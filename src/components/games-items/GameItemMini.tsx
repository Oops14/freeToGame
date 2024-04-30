import game_item_mini from "../../assets/intro/2.jpeg";
import BasicRating from "../rating/BasicRating";
import styles from "./gameItemMini.module.scss";

export const GameItemMini = () => {
    return (
        <div className={styles.game_item_mini}>
            <div className={styles.image}>
                <img src={game_item_mini} alt="#" />
            </div>
            <div className={styles.game_details}>
                <h5 className={styles.item_mini_title}>
                    Red Dead Redemption 2
                </h5>
                <div className="stars">
                    <BasicRating />
                </div>
                <div className={styles.developer}>R2 Games</div>
            </div>
        </div>
    );
};
