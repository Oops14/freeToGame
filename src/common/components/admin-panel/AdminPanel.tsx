import style from './admin-panel.module.scss'

export const AdminPanel = () => {
  return (
    <div className={style.admin_panel}>
        <ul className={style.admin_panel_menu}>
            <li>
                <a href="#">Dashboard</a>
            </li>
            <li>
                <a href="#">Add Post</a>
            </li>
        </ul>
    </div>
  )
};