import styles from "./intro.module.scss";
import "../../bootstrap/bootstrap-grid.scss";
import slider_img from "../../assets/slider/wd-vgs-slide-1-opt.jpg";
import { GameItemMini } from "../games-items/GameItemMini";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../state/store";
import { InitialStateType } from "../../state/gamesReducer";

export const Intro = () => {
    const games = useSelector<AppRootStateType, InitialStateType>(
        (state) => state.games
    );
    // Shuffle array
    const shuffled = games.games.sort(() => 0.5 - Math.random());
    // Get sub-array of first 5 elements after shuffled
    const randomGames = shuffled.slice(0, 5);

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
                            <h5>Free to play games</h5>
                            <div className={styles.games}>
                                {randomGames.map((game) => {
                                    return (
                                        <GameItemMini
                                            key={game.id}
                                            title={game.title}
                                            img={game.thumbnail}
                                            dev={game.developer}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
