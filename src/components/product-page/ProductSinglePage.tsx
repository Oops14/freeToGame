import React, { useEffect } from 'react'
import { Header } from '../header/Header.tsx'
import { Footer } from '../footer/Footer.tsx'
import { useSelector } from 'react-redux'
import { AppRootStateType } from '../../state/store.ts'
import style from './productSinglePage.module.scss'
import prodImg from '../../assets/prod_img.jpeg'
import BasicRating from '../../features/rating/BasicRating.tsx'
import advant_img from '../../assets/product-page/1.svg'
import advant_img2 from '../../assets/product-page/2.jpeg'
import advant_img3 from '../../assets/product-page/3.svg'
import advant_img4 from '../../assets/product-page/4.svg'

export const ProductSinglePage = () => {
    const prodInfo = useSelector<AppRootStateType, string>((state) => state.games.gameTitle)

    useEffect(() => {
        console.log(prodInfo)
    }, [])

    return (
        <>
            <Header />
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
                                    <span className={style.info_title}>Mild Language, <span>Violence</span></span>
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
                <div className={style.description}></div>
                <div className={style.reviews}></div>
                <div className={style.related_products}></div>
            </div>
            <Footer />
        </>
    )
}
