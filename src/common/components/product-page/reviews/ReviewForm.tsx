import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useAppDispatch } from '../../../../app/store'
import { addReviewAC, ReviewItem } from '../../../../features/review/model/ReviewReducer'
import DescriptionAlerts from '../../alert/DescriptionAlerts'
import style from '../productSinglePage.module.scss'

type Props = {
    productId: number
}

/**
 *
 * ReviewForm component allows users to submit reviews for a specific product.
 * It uses local state to manage the input fields for the review, name, and email.
 * The component dispatches an action to add the review to the global state upon form submission.
 *
 // TODO: ADD conditions for email area, add additional func. for name field and email field.
 */
export const ReviewForm = ({ productId }: Props) => {
    const [review, setReview] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const [isEmptyField, setIsEmptyField] = useState(false)

    const dispatch = useAppDispatch()

    const handleReview = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReview(event.target.value)
    }

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const submitReview = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (email.length === 0 || name.length === 0 || review.length === 0) {
            setIsEmptyField(true)
            return
        }

        const reviewObj: ReviewItem = {
            id: uuidv4(),
            userName: name,
            comment: review,
        }

        dispatch(addReviewAC(reviewObj, productId))
    }

    return (
        <div className={style.review_area}>
            <h5>ADD A REVIEW</h5>
            <div>Your email address will not be published. Required fields are marked *</div>
            <form className={style.add_review_form} action="#" onSubmit={submitReview}>
                <label>Your review * </label>
                <textarea onChange={(e) => handleReview(e)} name="review_area" id="1"></textarea>
                <label>Name *</label>
                <input onChange={(e) => handleName(e)} type="text" />
                <label>Email *</label>
                <input onChange={(e) => handleEmail(e)} type="text" />

                <button type="submit" className={`btn ${style.review_btn}`}>
                    Submit
                </button>

                {isEmptyField && (
                    <DescriptionAlerts
                        title="Fill all fields to leave a comment."
                        typeAlert="warning"
                        text="Make sure that you have defined the Email, Name and Review"
                    />
                )}
            </form>
        </div>
    )
}
