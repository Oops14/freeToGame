import { Link } from 'react-router-dom'
import style from './admin-panel.module.scss'

// /freeToGame/dashboard/
export const AdminPanel = () => {
    return (
        <div className={style.admin_panel}>
            <ul className={style.admin_panel_menu}>
                <li>
                    <Link to="/freeToGame/dashboard/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/freeToGame/dashboard/posts">Add Post</Link>
                </li>
                <li>
                    <Link to="/freeToGame/">View Site</Link>
                </li>
            </ul>
        </div>
    )
}
