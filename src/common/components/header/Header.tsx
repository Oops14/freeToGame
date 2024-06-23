import style from './header.module.scss'
import logo from '../../../assets/logo/1.svg'
import SearchIcon from '@mui/icons-material/Search'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import MenuIcon from '@mui/icons-material/Menu'
import { Link, useNavigate } from 'react-router-dom'
import { AppRootStateType, useAppDispatch } from '../../../app/store'
import { useSelector } from 'react-redux'
import { logOut } from '../../../features/auth/model/authReducer'
import { AdminPanel } from '../admin-panel/AdminPanel'

export const Header = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isLoggedIn = useSelector<AppRootStateType, boolean>((state) => state.auth.isLoggedIn)

    const logoutHandler = () => {
        if (isLoggedIn) {
            dispatch(logOut())
            navigate('/freeToGame/login/')
        }
    }

    return (
        <>
            {isLoggedIn && <AdminPanel />}
            
            <section className={style.main_header}>
                <div className={'container ' + style.container}>
                    <div className={style.header_col_left}>
                        <img src={logo} alt={'#'} />
                    </div>
                    <div className={style.header_col_center}>
                        <ul className={style.header_menu}>
                            <Link to="/freeToGame/">Home</Link>
                            <Link to="/freeToGame/games/">Games</Link>
                        </ul>
                    </div>
                    <div className={style.header_col_right}>
                        <div className={style.login}>
                            <Link onClick={logoutHandler} to={'/freeToGame/login/'}>
                                {isLoggedIn ? 'Logout' : 'Login'}
                            </Link>
                        </div>
                        <div className={style.social_icons}>
                            <div className={style.icon_item}>
                                <InstagramIcon />
                            </div>
                            <div className={style.icon_item}>
                                <YouTubeIcon />
                            </div>
                        </div>
                        <div className={style.search}>
                            <input type="text" />
                            <div className={style.icon_btn}>
                                <SearchIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.mobile_header}>
                <div className={'container ' + style.mobile_header_container}>
                    <div className={style.mobile_header_top}>
                        <div>
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
                    <div className={style.mobile_header_bottom}>
                        <div className={style.burger_menu}>
                            <MenuIcon />
                        </div>
                        <div className={style.search}>
                            <input type="text" />
                            <div className={style.icon_btn}>
                                <SearchIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
