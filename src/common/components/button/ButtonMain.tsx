import style from './buttonMain.module.scss'

export type ButtonMain = {
    title?: string
}

export const ButtonMain: React.FC<ButtonMain> = ({ title = 'More Details' }) => {
    return (
        <>
            <button className={`btn ${style.main}` } >{title}</button>
        </>
    )
}
