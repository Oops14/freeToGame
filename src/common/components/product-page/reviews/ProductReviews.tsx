import style from "../productSinglePage.module.scss";
import {ReviewForm} from "./ReviewForm.tsx";
import ReviewRating from "./ReviewRating.tsx";
import {Review} from "../../../../features/review/ui/Review.tsx";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../app/store.ts";
import {ReviewItem} from "../../../../features/review/model/ReviewReducer.ts";

const ProductReviews = () => {
    const reviews = useSelector<AppRootStateType, ReviewItem[]>((state) => state.reviews.reviews)

    return (
        <div className={style.reviews}>
            <div className="container">
                <div className={style.reviews_inner}>
                    <h4>Customer Reviews</h4>
                    <div className={`row ${style.row_center}`}>
                        <div className="col-lg-6 col-md-12">
                            <ReviewForm/>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <ReviewRating/>
                        </div>
                    </div>
                    <div className={style.product_counter_reviews}>2 REVIEWS FOR ELDEN RING</div>
                    <div className="row">
                        {reviews.map((rev, index) => {
                            return (
                                <div key={index} className="col-lg-6">
                                    <Review user={rev.userName} comment={rev.comment}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductReviews;