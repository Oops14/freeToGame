import { useEffect } from 'react'
import { Header } from '../header/Header.tsx'
import { Footer } from '../footer/Footer.tsx'
import { useSelector } from 'react-redux'
import style from './productSinglePage.module.scss'
import prodImg from '../../../assets/prod_img.jpeg'
import advant_img from '../../../assets/product-page/1.svg'
import advant_img2 from '../../../assets/product-page/2.jpeg'
import advant_img3 from '../../../assets/product-page/3.svg'
import advant_img4 from '../../../assets/product-page/4.svg'
import desc_img from '../../../assets/descr_images/1.jpeg'
import desc_img2 from '../../../assets/descr_images/2.jpeg'
import desc_img3 from '../../../assets/descr_images/3.jpeg'
import { AppRootStateType, useAppDispatch } from '../../../app/store.ts'
import BasicRating from '../rating/BasicRating.tsx'
import { Review } from '../../../features/review/Review.tsx'
import { GameGridItem } from '../../../features/games/game-grid/GameGridItem.tsx'
import temp_img from '../../../assets/w-vgs-rpg-starfield-430x553.jpg'
import { getGameByIdTC } from '../../../features/games/gamesReducer.ts'
import { RequestStatusType } from '../../../app/appReducer.ts'
import LinearIndeterminate from '../progress-bar/LinearIndeterminate.tsx'
import { GameDetails } from '../../types/types.ts'
import { useParams } from 'react-router-dom'

export const ProductSinglePage = () => {
    // const productId = useSelector<AppRootStateType, number | null>((state) => state.games.gameId)
    const loader = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    const productInfo = useSelector<AppRootStateType, GameDetails>((state) => state.games.currentGameInfo)
    const dispatch = useAppDispatch()

    const { id } = useParams();

    console.log(productInfo);
    
    useEffect(() => {
        if (id) dispatch(getGameByIdTC(Number(id)))

        console.log(id);
    }, [])

    return (
        <>
            <Header />

            {loader === 'loading' && <LinearIndeterminate />}

            <div className={style.single_product}>
                <div className={'container'}>
                    <div className={style.product_inner + ' ' + style.stretch}>
                        <div className="col-lg-4">
                            <div className={style.product_gallery}>
                                <img src={prodImg} alt="#" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className={style.product_summary}>
                                <div className={style.breadcrumbs}>Home / RPG / Elden Ring</div>
                                <div className={style.game_title}>Elden Ring</div>
                                <div className={style.rating}>
                                    <BasicRating />
                                </div>
                                <div className={style.short_description}>
                                    A vast world where open fields with a variety of situations and huge dungeons with
                                    complex and three-dimensional designs are seamlessly connected. In addition to
                                    multiplayer, where you can directly connect with other players.
                                </div>
                                <div className={style.game_info}>
                                    <div className={style.info_item}>
                                        <div>Release date</div>
                                        <span>21 Apr , 2023</span>
                                    </div>
                                    <div className={style.info_item}>
                                        <div>Publisher</div>
                                        <span>Deep Silver</span>
                                    </div>
                                    <div className={style.info_item}>
                                        <div>Developer</div>
                                        <span>Raven Software</span>
                                    </div>
                                </div>
                            </div>
                            <div className={style.additional_info}>
                                <div className={style.additional_info_item}>
                                    <div className={style.additional_info_item_img}>
                                        <img src={advant_img} alt="#" />
                                    </div>
                                    <span className={style.info_title}>Adventure</span>
                                </div>
                                <div className={style.additional_info_item}>
                                    <div className={style.additional_info_item_img}>
                                        <img src={advant_img2} alt="#" />
                                    </div>
                                    <span className={style.info_title}>
                                        Mild Language, <span>Violence</span>
                                    </span>
                                </div>
                                <div className={style.additional_info_item}>
                                    <div className={style.additional_info_item_img}>
                                        <img src={advant_img3} alt="#" />
                                    </div>
                                    <span className={style.info_title}>12 Support language</span>
                                </div>
                                <div className={style.additional_info_item}>
                                    <div className={style.additional_info_item_img}>
                                        <img src={advant_img4} alt="#" />
                                    </div>
                                    <span className={style.info_title}>Single Player</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.description}>
                    <div className="container">
                        <h4>Description</h4>
                        <div className={style.desc_images}>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className={style.desc_img_item}>
                                        <img src={desc_img} alt="#" />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className={style.desc_img_item}>
                                        <img src={desc_img2} alt="#" />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className={style.desc_img_item}>
                                        <img src={desc_img3} alt="#" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p>
                            The story of Cal Kestis continues in Star Wars Jedi: Survivor™, a third-person,
                            galaxy-spanning, action-adventure game from Respawn Entertainment, developed in
                            collaboration with Lucasfilm Games. This narratively driven, single-player title picks up 5
                            years after the events of Star Wars Jedi: Fallen Order™ and follows Cal’s increasingly
                            desperate fight as the galaxy descends further into darkness. Pushed to the edges of the
                            galaxy by the Empire, Cal will find himself surrounded by threats new and familiar.
                        </p>
                    </div>
                </div>
                <div className={style.reviews}>
                    <div className="container">
                        <div className={style.reviews_inner}>
                            <h4>Customer Reviews</h4>
                            <div className={`row ${style.row_center}`}>
                                <div className="col-lg-6">
                                    <div className={style.review_area}>
                                        <h5>ADD A REVIEW</h5>
                                        <div>
                                            Your email address will not be published. Required fields are marked *
                                        </div>
                                        <form className={style.add_review_form} action="#">
                                            <label>Your review * </label>
                                            <textarea name="review_area" id="1"></textarea>
                                            <label>Name *</label>
                                            <input type="text" />
                                            <label>Email *</label>
                                            <input type="text" />

                                            <button className={`btn ${style.review_btn}`}>Submit</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={style.reviews_counter}>
                                        <div className={style.avarage_rating}>4</div>
                                        <div className="rating">
                                            <BasicRating />
                                        </div>
                                        <div className="couner_item">2 reviews</div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.product_counter_reviews}>2 REVIEWS FOR ELDEN RING</div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <Review />
                                </div>
                                <div className="col-lg-6">
                                    <Review />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.related_products}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <GameGridItem title="Starfield" img={temp_img} showButton={true} />
                            </div>
                            <div className="col-lg-3">
                                <GameGridItem title="Starfield" img={temp_img} showButton={true} />
                            </div>
                            <div className="col-lg-3">
                                <GameGridItem title="Starfield" img={temp_img} showButton={true} />
                            </div>
                            <div className="col-lg-3">
                                <GameGridItem title="Starfield" img={temp_img} showButton={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
