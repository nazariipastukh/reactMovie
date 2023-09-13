import {useEffect} from "react";
import {MoviesListCard} from "../MovieCard/MoviesListCard";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../../redux/slices";
import {useSearchParams} from "react-router-dom";
import styles from './Movies.module.css'

export const MoviesList = () => {
    const dispatch = useDispatch()
    const {movies} = useSelector(state => state.movies)
    const {isLoading} = useSelector(state => state.loading)

    const [query] = useSearchParams({page: '1'})
    const page = query.get('page')

    useEffect(() => {
        dispatch(movieActions.getAll({page}))
    }, [dispatch, page])

    return (
        <div className={`${styles.movieList} ${isLoading ? styles.movieListLoad : ''}`}>
            <div className={styles.moviesWrap}>
                {
                    movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
                }
            </div>
        </div>
    );
};