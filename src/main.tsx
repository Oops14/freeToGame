import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './state/store.ts'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {ProductSinglePage} from "./components/product-page/ProductSinglePage.tsx";

const router = createBrowserRouter([
    {
        path: '/your-repository-name/',
        element: <App />,
    },
    {
        path: '/your-repository-name/product-page',
        element: <ProductSinglePage />,
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
