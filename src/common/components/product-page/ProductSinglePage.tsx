import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import { RequestStatusType } from '../../../app/appReducer.ts'
import { AppRootStateType, useAppDispatch } from '../../../app/store.ts'
import advant_img from '../../../assets/product-page/1.svg'
import advant_img2 from '../../../assets/product-page/2.jpeg'
import advant_img3 from '../../../assets/product-page/3.svg'
import advant_img4 from '../../../assets/product-page/4.svg'
import { getCategoryGamesTC, getGameByIdTC } from '../../../features/games/model/gamesReducer.ts'
import { ReviewItem } from '../../../features/review/model/ReviewReducer.ts'
import { Review } from '../../../features/review/ui/Review.tsx'
import { GameDetails, GameType } from '../../types/types.ts'
import { scrollToTop } from '../../utils/scrollToTop.ts'
import { Footer } from '../footer/Footer.tsx'
import { Header } from '../header/Header.tsx'
import LinearIndeterminate from '../progress-bar/LinearIndeterminate.tsx'
import BasicRating from '../rating/BasicRating.tsx'
import { SliderComponent } from '../slider/SliderComponent.tsx'
import style from './productSinglePage.module.scss'
import { ReviewForm } from './reviews/ReviewForm.tsx'
import ReviewRating from './reviews/ReviewRating.tsx'

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

    const reviews = useSelector<AppRootStateType, ReviewItem[]>((state) => state.reviews.reviews)

    useEffect(() => {
        if (id) dispatch(getGameByIdTC(Number(id)))
        if (categ) dispatch(getCategoryGamesTC(categ.split(' ').join('')))

        /**
         * TODO: Use the native func. from react router to "scroll to top".
         */
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
                                    <ReviewForm />
                                </div>
                                <div className="col-lg-6">
                                    <ReviewRating />
                                </div>
                            </div>
                            <div className={style.product_counter_reviews}>2 REVIEWS FOR ELDEN RING</div>
                            <div className="row">
                                {reviews.map((rev) => {
                                    return (
                                        <div className="col-lg-6">
                                            <Review user={rev.userName} comment={rev.comment} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
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
            </div>
            <Footer />
        </>
    )
}
