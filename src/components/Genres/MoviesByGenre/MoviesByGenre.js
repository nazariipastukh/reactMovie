import {useEffect} from "react";
import {useParams, useSearchParams} from "react-router-dom";
import {MoviesListCard} from "../../Movies";
import {useDispatch, useSelector} from "react-redux";
import {movieByGenreActions} from "../../../redux/slices";
import styles from "../../Movies/MoviesComponent/Movies.module.css";

export const MoviesByGenre = () => {
    const {id} = useParams();
    const dispatch = useDispatch()
    const {moviesByGenre} = useSelector(state => state.moviesByGenre)

    const [query] = useSearchParams({page: '1'})
    const page = query.get('page')

    useEffect(() => {
        dispatch(movieByGenreActions.getMoviesByGenre({id, page}))
    }, [dispatch, id, page])

    return (
        <div className={styles.movieList}>
            <div className={styles.moviesWrap}>
                {
                    moviesByGenre.map(movie => <MoviesListCard movie={movie} key={movie.id}/>)
                }
            </div>
        </div>
    );
}