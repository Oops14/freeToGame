import { useSelector } from 'react-redux'
import { AppRootStateType } from '../../../app/store'
import { GameInitialStateType } from '../../types/types'

type Props = {
    className: string
    gamesPerPage: number
    changePage: (pageNumber: number) => void
}

export const Pagination = ({ className, gamesPerPage, changePage }: Props) => {
    const games = useSelector<AppRootStateType, GameInitialStateType>((state) => state.games)

    return (
        <div className={className}>
            {Array(Math.ceil(games.games.length / gamesPerPage))
                .fill(undefined)
                .map((_, index) => (
                    <button key={index} onClick={() => changePage(index + 1)}>
                        {index + 1}
                    </button>
                ))}
        </div>
    )
}
