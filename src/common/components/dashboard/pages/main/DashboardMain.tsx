import style from '../../dashboard.module.scss'
import ActivityWidget from './widgets/ActivityWidget'
import QuickDraftWidget from './widgets/QuickDraftWidget'
import RecentComments from './widgets/RecentComments'

const DashboardMain = () => {
    return (
        <>
            <div className={style.title_main}>
                <h2 className={style.content_title}>Dashboard</h2>
            </div>
            <div className="widgets">
                <div className="row">
                    <div className="col-lg-4">
                        <ActivityWidget />
                    </div>
                    <div className="col-lg-4">
                        <RecentComments />
                    </div>
                    <div className="col-lg-4">
                        <QuickDraftWidget />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardMain
