import cat_img from "../../../assets/action_cat.jpeg";
import style from "./category-grid-item.module.scss";

type CategoriesGridItemType = {
    title: string
}

export const CategoriesGridItem: React.FC<CategoriesGridItemType> = ({ title }) => {
    return (
        <div className={style.category_grid_item}>
            <div className={style.category_name}>
                <h5>{ title }</h5>
            </div>
            <div className={style.category_img}>
                <img src={cat_img} alt="" />
            </div>
        </div>
    );
};