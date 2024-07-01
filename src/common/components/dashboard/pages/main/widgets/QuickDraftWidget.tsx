import style from './widgets.module.scss'

const QuickDraftWidget = () => {
    return (
        <div className={style.dashboard_widget}>
            <div className={style.widget_title}>Quick Draft</div>
            <div>
                <div className={style.recently_content}>
                    <form>
                        <label>Title</label>
                        <input type="text" className={style.draft_input} />
                        <label>Content</label>
                        <textarea placeholder="What's on your mind"></textarea>
                        <button className={`btn  ${style.draft_btn}`}>Save Draft</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default QuickDraftWidget
