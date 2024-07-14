import style from '../productSinglePage.module.scss'

export const ReviewForm = () => {
    return (
        <div className={style.review_area}>
            <h5>ADD A REVIEW</h5>
            <div>Your email address will not be published. Required fields are marked *</div>
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
    )
}
