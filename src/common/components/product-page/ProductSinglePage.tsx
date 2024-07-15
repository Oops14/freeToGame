import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { useParams } from 'react-router-dom'
import { RequestStatusType } from '../../../app/appReducer.ts'
import { AppRootStateType, useAppDispatch } from '../../../app/store.ts'
import { getCategoryGamesTC, getGameByIdTC } from '../../../features/games/model/gamesReducer.ts'
import { GameDetails } from '../../types/types.ts'
import { scrollToTop } from '../../utils/scrollToTop.ts'
import { Footer } from '../footer/Footer.tsx'
import { Header } from '../header/Header.tsx'
import LinearIndeterminate from '../progress-bar/LinearIndeterminate.tsx'
import style from './productSinglePage.module.scss'
import ProductReviews from './reviews/ProductReviews.tsx'
import Description from './description/Description.tsx'
import ProductSummary from "./summary/ProductSummary.tsx";
import ProductAdditionalInfo from "./additional-info/ProductAdditionalInfo.tsx";
import RelatedProducts from "./related-products/RelatedProducts.tsx";

export const ProductSinglePage = () => {
    const loader = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    const dispatch = useAppDispatch()

    const { id, categ } = useParams()
    const location = useLocation()
    const productInfo = useSelector<AppRootStateType, GameDetails>((state) => state.games.currentGameInfo)

    useEffect(() => {
        if (id) dispatch(getGameByIdTC(Number(id)))
        if (categ) dispatch(getCategoryGamesTC(categ.split(' ').join('')))

        /**
         * TODO: Use the native func. from react router to "scroll to top".
         */
        scrollToTop()
    }, [location.key])

    return (
        <>
            <Header />

            {loader === 'loading' && <LinearIndeterminate />}

            <div className={style.single_product}>
                <div className={'container'}>
                    <div className={style.product_inner + ' ' + style.stretch}>
                        <div className="col-lg-4 col-md-12">
                            <div className={style.product_gallery}>
                                <img src={productInfo.thumbnail} alt="#" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <ProductSummary/>
                            <ProductAdditionalInfo />
                        </div>
                    </div>
                </div>
                <Description />
                <ProductReviews />
                <RelatedProducts />
            </div>
            <Footer />
        </>
    )
}
