import {MoviesByGenre, PaginationComponent} from "../../../components";
import {useSelector} from "react-redux";

export const MoviesByGenrePage = () => {
    const {pages} = useSelector(state => state.moviesByGenre)

    return (
        <div>
            <MoviesByGenre/>
            <PaginationComponent pages={pages}/>
        </div>
    );
};