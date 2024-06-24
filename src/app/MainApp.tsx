import CircularProgress from '@mui/material/CircularProgress'
import { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { isInitializedTC } from './appReducer.ts'
import { useAppDispatch } from './store'

export const MainApp = ({ router }: { router: ReturnType<typeof createBrowserRouter> }) => {
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        dispatch(isInitializedTC()).then(() => {
            setLoading(false)
        })
    }, [dispatch, loading])

    if (loading) {
        return (
            <div style={{ position: 'fixed', top: '30%', textAlign: 'center', width: '100%' }}>
                <CircularProgress />
            </div>
        )
    }

    return <RouterProvider router={router} />
}
