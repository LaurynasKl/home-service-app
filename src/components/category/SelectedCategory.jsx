import Category2 from "./Category2";
import { CategoryCard } from "./CategoryCard";
import style from "./SelectedCategory.module.scss";

export function SelectedCategory() {

    return (
        <div className={style.selectedCategory}>
            <aside className={style.left}>
                <Category2 />
            </aside>
            <div className={style.right}>
                <CategoryCard />
            </div>
        </div>

    )
}