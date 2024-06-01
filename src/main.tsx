import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './app/App'
import { store } from './app/store'
import { ProductSinglePage } from './common/components/product-page/ProductSinglePage'

const router = createBrowserRouter([
    {
        path: '/your-repository-name/',
        element: <App />,
    },
    {
        path: '/your-repository-name/product-page/:categ/:id',
        element: <ProductSinglePage />,
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
