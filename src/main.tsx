import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter } from 'react-router-dom'
import App from './app/App'
import { MainApp } from './app/MainApp'
import { store } from './app/store'
import { Archive } from './common/components/archive/Archive'
import { Dashboard } from './common/components/dashboard/Dashboard'
import { ProductSinglePage } from './common/components/product-page/ProductSinglePage'
import { Login } from './features/auth/ui/Login'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/freeToGame/',
        element: <App />,
    },
    {
        path: '/freeToGame/product-page/:categ/:id',
        element: <ProductSinglePage />,
    },
    {
        path: '/freeToGame/games/',
        element: <Archive />,
    },
    {
        path: '/freeToGame/login/',
        element: <Login />,
    },
    {
        path: '/freeToGame/dashboard/',
        element: <Dashboard />,
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <MainApp router={router} />
    </Provider>
)
