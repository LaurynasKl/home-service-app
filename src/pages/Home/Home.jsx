import Category from "../../components/category/Category";
import TopBar from "../../components/layout/TopBar";
import Search from "../../components/search/search";

export function Home(){
    return(
        <>
            <TopBar />
            <Search />
            <Category />
        </>
    )
};
