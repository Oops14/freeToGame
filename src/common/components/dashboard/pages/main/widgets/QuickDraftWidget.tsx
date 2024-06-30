import style from './widgets.module.scss'

const QuickDraftWidget = () => {
    return (
        <div className={style.dashboard_widget}>
            <div className={style.widget_title}>Quick Draft</div>
            <div>
                <div className={style.recently_content}></div>
            </div>
        </div>
    )
}

export default QuickDraftWidget
