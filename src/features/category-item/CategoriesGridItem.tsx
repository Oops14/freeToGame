import { useNavigate } from 'react-router-dom';
import cat_img from "../../assets/action_cat.jpeg";
import style from "./category-grid-item.module.scss";

type Props = {
    title: string
}

export const CategoriesGridItem = ({ title }: Props) => {
    const navigate = useNavigate()
    const categ = title.toLowerCase()

    const handleCategoryGames = () => {
        navigate(`/freeToGame/games/?category=${categ}`)
    }

    return (
        <div onClick={handleCategoryGames} className={style.category_grid_item}>
            <div className={style.category_name}>
                <h5>{ title }</h5>
            </div>
            <div className={style.category_img}>
                <img src={cat_img} alt="" />
            </div>
        </div>
    );
};
