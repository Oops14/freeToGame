import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AppRootStateType } from '../../../app/store'
import { AdminPanel } from '../admin-panel/AdminPanel'
import style from './dashboard.module.scss'

export const Dashboard = () => {
    const navigate = useNavigate()
    const isLoggedIn = useSelector<AppRootStateType, boolean>((state) => state.auth.isLoggedIn)

    const dashboardMenu = [
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
    ]

    const [activelink, setActiveLink] = useState(dashboardMenu[0].title)
    const handleMenuClick = (title: string) => {
        setActiveLink(title)
    }

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/freeToGame/')
        }
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
                                        <li key={index} className={activelink === link.title ? `${style.active}` : ''}>
                                            <Link to={link.link} onClick={() => handleMenuClick(link.title)}>
                                                {link.title}
                                            </Link>
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
