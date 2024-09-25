import Category from "../../components/category/Category";
import { CategoryCard } from "../../components/category/CategoryCard";
import Search from "../../components/search/search";

export function Home(){
    return(
        <>
            <Search />
            <Category />
            <CategoryCard />
        </>
    )
};
