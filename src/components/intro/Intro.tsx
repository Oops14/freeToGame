import styles from "./intro.module.scss";
import "../../bootstrap/bootstrap-grid.scss";
import slider_img from "../../assets/slider/wd-vgs-slide-1-opt.jpg";
import { GameItemMini } from "../games-items/GameItemMini";

export const Intro = () => {
    return (
        <section className={styles.intro}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className={styles.slider}>
                            <div className={styles.slide}>
                                <img src={slider_img} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={styles.col_inner_games}>
                            <h5>Discounted games</h5>
                            <div className={styles.games}>
                                <GameItemMini />
                                <GameItemMini />
                                <GameItemMini />
                                <GameItemMini />
                                <GameItemMini />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
