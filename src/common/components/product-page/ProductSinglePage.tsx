import { useEffect } from 'react'
import { Header } from '../header/Header.tsx'
import { Footer } from '../footer/Footer.tsx'
import { useSelector } from 'react-redux'
import style from './productSinglePage.module.scss'
import advant_img from '../../../assets/product-page/1.svg'
import advant_img2 from '../../../assets/product-page/2.jpeg'
import advant_img3 from '../../../assets/product-page/3.svg'
import advant_img4 from '../../../assets/product-page/4.svg'
import { AppRootStateType, useAppDispatch } from '../../../app/store.ts'
import BasicRating from '../rating/BasicRating.tsx'
import { Review } from '../../../features/review/ui/Review.tsx'
import { getCategoryGamesTC, getGameByIdTC } from '../../../features/games/model/gamesReducer.ts'
import { RequestStatusType } from '../../../app/appReducer.ts'
import LinearIndeterminate from '../progress-bar/LinearIndeterminate.tsx'
import { GameDetails, GameType } from '../../types/types.ts'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import { useLocation } from 'react-router'
import { scrollToTop } from '../../utils/scrollToTop.ts'
import { SliderComponent } from '../slider/SliderComponent.tsx'

export const ProductSinglePage = () => {
    const loader = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    const productInfo = useSelector<AppRootStateType, GameDetails>((state) => state.games.currentGameInfo)
    const dispatch = useAppDispatch()
    const { id, categ } = useParams()
    const gamesByCategory = useSelector<AppRootStateType, GameType[]>((state) => state.games.gamesByCategory)
    // get random games.
    const simmilarGames = gamesByCategory.sort(() => 0.5 - Math.random()).slice(0, 12)
    // refresh the page.
    const location = useLocation()

    useEffect(() => {
        if (id) dispatch(getGameByIdTC(Number(id)))
        if (categ) dispatch(getCategoryGamesTC(categ))

        scrollToTop()
    }, [location.key])

    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    }

    return (
        <>
            <Header />

            {loader === 'loading' && <LinearIndeterminate />}

            <div className={style.single_product}>
                <div className={'container'}>
                    <div className={style.product_inner + ' ' + style.stretch}>
                        <div className="col-lg-4">
                            <div className={style.product_gallery}>
                                <img src={productInfo.thumbnail} alt="#" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className={style.product_summary}>
                                <div className={style.breadcrumbs}>Home / RPG / {productInfo.title}</div>
                                <div className={style.game_title}>{productInfo.title}</div>
                                <div className={style.rating}>
                                    <BasicRating />
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
                            <div className={style.additional_info}>
                                <div className={style.additional_info_item}>
                                    <div className={style.additional_info_item_img}>
                                        <img src={advant_img} alt="#" />
                                    </div>
                                    <span className={style.info_title}>{productInfo.genre}</span>
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
                                                <img src={screen.image} alt="#" />
                                            </div>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>

                        <p>{productInfo.description}</p>
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
                        <div style={{
                            marginRight: "-15px",
                            marginLeft: "-15px"
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
            </div>
            <Footer />
        </>
    )
}
