import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AppRootStateType } from '../../../app/store'
import { AdminPanel } from '../admin-panel/AdminPanel'
import style from './dashboard.module.scss'

export const Dashboard = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const isLoggedIn = useSelector<AppRootStateType, boolean>((state) => state.auth.isLoggedIn)

    // Use useMemo to memoize the dashboardMenu array
    const dashboardMenu = useMemo(
        () => [
            {
                title: 'Dashboard',
                link: '/freeToGame/dashboard/',
            },
            {
                title: 'Posts',
                link: '/freeToGame/dashboard/posts',
            },
            {
                title: 'Reviews',
                link: '/freeToGame/dashboard/reviews',
            },
        ],
        []
    )

    const [activelink, setActiveLink] = useState(dashboardMenu[0].title)

    const handleMenuClick = (title: string) => {
        setActiveLink(title)
    }

    useEffect(() => {
        let activeDashboardLink = dashboardMenu[0].title

        dashboardMenu.forEach((el) => {
            if (el.link === location.pathname) activeDashboardLink = el.title
        })

        setActiveLink(activeDashboardLink)
    }, [location.pathname, dashboardMenu])

    useEffect(() => {
        if (!isLoggedIn) navigate('/freeToGame/')
    }, [isLoggedIn, navigate])

    return (
        <>
            <AdminPanel />
            <div className={style.dashboard_area}>
                <div className="row">
                    <div className="col-lg-2">
                        <div className={style.sidebar_inner}>
                            <ul className={style.dashboard_sidebar_menu}>
                                {dashboardMenu.map((link, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className={activelink === link.title ? `${style.active}` : ''}
                                            onClick={() => handleMenuClick(link.title)}>
                                            <Link to={link.link}>{link.title}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className={style.content_area}></div>
                    </div>
                </div>
            </div>
        </>
    )
}
