import style from './grid-view-tem.module.scss'

type Props = {
    gridType: string
    class: string
    img: string,
    classImg?: string
    changeGridView: (view: string) => void
    currentGrid: string
}

export const GridViewItem = ({ gridType , class: className, img, classImg, changeGridView, currentGrid }: Props) => {
    return (
        <div onClick={() => changeGridView(gridType)} className={gridType === currentGrid ? `${className + ' ' + style.active}` : className}>
            <img className={classImg} src={img} alt="line" />
        </div>
    )
}
