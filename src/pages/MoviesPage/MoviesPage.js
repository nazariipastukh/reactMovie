import {MoviesList} from "../../components";
import {PaginationComponent} from "../../components";
import {useSelector} from "react-redux";

export const MoviesPage = () => {
    const {pages} = useSelector(state => state.movies)

    return (
        <div>
            <MoviesList/>
            <PaginationComponent pages={pages}/>
        </div>
    );
};