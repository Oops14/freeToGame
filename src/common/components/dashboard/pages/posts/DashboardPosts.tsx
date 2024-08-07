import { useSelector } from 'react-redux'
import { AppRootStateType } from '../../../../../app/store'
import { Post as PostType } from '../../../../../features/posts/model/postReducer.ts'
import Post from '../../../../../features/posts/ui/dashboard/Post'
import FullScreenDialog from '../../../popup/FullScreenDialog.tsx'
import style from '../../dashboard.module.scss'

const DashboardPosts = () => {
    // @ts-ignore
    const posts = useSelector<AppRootStateType, PostType[]>((state) => state.posts.posts)

    return (
        <>
            <div className={style.title_main}>
                <h2 className="content_title">Posts</h2>
            </div>
            <div className={style.filter_panel}>
                <div className={style.add_new}>
                    <FullScreenDialog text={'Add new Post'} />
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

            {/* Panel */}
            <div className={style.post_item}>
                <div className={style.post_block_title}>
                    <input type="checkbox" />
                    <div className="post_title">Post Title</div>
                </div>
                <div className={style.author}>
                    <span>Posted by</span>
                </div>
                <div className={style.categories}>Category</div>
                <div className={style.comments}>Comments</div>
                <div className={style.date}>
                    <span>Date</span>
                    <span> </span>
                </div>
            </div>

            <div className={style.current_content_area}>
                {posts.map((post) => {
                    return <Post key={post.id} title={post.title} category={post.category} date={post.date} />
                })}
            </div>
        </>
    )
}

export default DashboardPosts
