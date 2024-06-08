import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './app/App'
import { store } from './app/store'
import { ProductSinglePage } from './common/components/product-page/ProductSinglePage'
import { Archive } from './common/components/archive/Archive'

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
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
