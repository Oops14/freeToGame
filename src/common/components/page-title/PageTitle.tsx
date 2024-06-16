import style from './page-title.module.scss'

type Props = {
    title: string
}

export const PageTitle = ({ title }: Props) => {
    return (
        <div className={style.page_title}>
            <div className="container">
                <h1>{title.toUpperCase()}</h1>
            </div>
        </div>
    )
}
