import { CategoriesGridItem } from "./category-item/CategoriesGridItem";
import style from "./categories.module.scss";

export const Categories = () => {
    return (
        <section className={style.categories}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className={style.category_item_wrapper}>
                            <CategoriesGridItem />
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className={style.category_item_wrapper}>
                            <CategoriesGridItem />
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className={style.category_item_wrapper}>
                            <CategoriesGridItem />
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className={style.category_item_wrapper}>
                            <CategoriesGridItem />
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className={style.category_item_wrapper}>
                            <CategoriesGridItem />
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className={style.category_item_wrapper}>
                            <CategoriesGridItem />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
