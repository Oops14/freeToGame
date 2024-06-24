import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppRootStateType } from '../../../app/store'

export const Dashboard = () => {
    const navigate = useNavigate()
    const isLoggedIn = useSelector<AppRootStateType, boolean>((state) => state.auth.isLoggedIn)

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/freeToGame/')
        }
    }, [isLoggedIn, navigate])

    return (
        <div>
            <h1>Dashbaord</h1>
        </div>
    )
}
