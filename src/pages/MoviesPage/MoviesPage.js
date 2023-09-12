import {MoviesList} from "../../components";
import {PaginationComponent} from "../../components/Pagination/PaginationComponent";

export const MoviesPage = () => {

    return (
        <div>
            <MoviesList/>
            <PaginationComponent/>
        </div>
    );
};