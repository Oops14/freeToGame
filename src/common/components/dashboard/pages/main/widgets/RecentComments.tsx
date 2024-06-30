import style from './widgets.module.scss'

const RecentComments = () => {
    return (
        <div className={style.dashboard_widget}>
            <div className={style.widget_title}>Recent Comments</div>
            <div>
                <div className={style.recently_content}>
                    <div className={style.recently_item}>
                        <div className={style.image}>
                            <img
                                src="https://secure.gravatar.com/avatar/43b3df5eac4e33d38cdcd4ef63be70b0?s=50&d=mm&r=g"
                                alt="#"
                            />
                        </div>
                        <div className={style.recent_comment_info}>
                            <a href="#">Качественный сервис для вашего Хонда: только лучшие специалисты.</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentComments
