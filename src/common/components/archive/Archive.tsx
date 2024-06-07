import { Categories } from '../categories/Categories'
import { Header } from '../header/Header'
import style from './archive.module.scss'

export const Archive = () => {
    return (
        <>
            <Header />
            <Categories />
            <div className="product_archive">
                <div className="container">
                    
                </div>
            </div>
        </>
    )
}