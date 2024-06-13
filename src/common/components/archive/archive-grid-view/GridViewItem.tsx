type Props = {
    class: string
    img: string,
    classImg?: string
}

export const GridViewItem = ({ class: className, img, classImg }: Props) => {
    return (
        <div className={className}>
            <img className={classImg} src={img} alt="line" />
        </div>
    )
}
