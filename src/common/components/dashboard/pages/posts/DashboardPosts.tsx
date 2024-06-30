import Post from '../../../../../features/posts/ui/dashboard/Post'
import style from '../../dashboard.module.scss'

const DashboardPosts = () => {
    return (
        <>
            <div className={style.title_main}>
                <h2 className="content_title">Posts</h2>
            </div>
            <div className={style.filter_panel}>
                <div className={style.add_new}>
                    <button className="btn">Add New</button>
                    <button className="btn">Remove Post</button>
                </div>
                <div className="filter">
                    <select>
                        <option value="0">Select option</option>
                        <option value="1">Newest</option>
                        <option value="2">Oldest</option>
                    </select>
                </div>
            </div>
            <div className={style.current_content_area}>
                <Post />
                <Post />
                <Post />
            </div>
        </>
    )
}

export default DashboardPosts
