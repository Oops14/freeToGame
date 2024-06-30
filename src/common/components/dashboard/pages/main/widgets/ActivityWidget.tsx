import style from './widgets.module.scss'

const ActivityWidget = () => {
    return (
        <div className={style.dashboard_widget}>
            <div className={style.widget_title}>Activity</div>
            <div>
                <div className={style.widget_inner_title}>Recently Published</div>
                <div className={style.recently_content}>
                    <div className={style.recently_item}>
                        <div className="date">Jun 13th 2023, 1:33 pm</div>
                        <div className={style.recent_title_info}>
                            <a href="#">Flower Arrangement Tips & Tricks from Floral Experts</a>
                        </div>
                    </div>
                    <div className={style.recently_item}>
                        <div className="date">Jun 13th 2023, 1:33 pm</div>
                        <div className={style.recent_title_info}>
                            <a href="#">Flower Arrangement Tips & Tricks from Floral Experts</a>
                        </div>
                    </div>
                    <div className={style.recently_item}>
                        <div className="date">Jun 13th 2023, 1:33 pm</div>
                        <div className={style.recent_title_info}>
                            <a href="#">Flower Arrangement Tips & Tricks from Floral Experts</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityWidget
