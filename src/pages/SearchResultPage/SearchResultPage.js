import {PaginationComponent} from "../../components";
import {SearchResults} from "../../components/Search/SearchResults";
import {useLocation} from "react-router-dom";

export const SearchResultPage = () => {
    const location = useLocation();
    const searchData = location.state?.searchData.results
    const pages = location.state?.searchData.total_pages

    return (
        <div>
            <SearchResults searchData={searchData}/>
            <PaginationComponent pages={pages}/>
        </div>
    );
};