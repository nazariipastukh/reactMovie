import {useEffect, useState} from "react";
import {MoviesListCard} from "../MovieCard/MoviesListCard";
import {moviesService} from "../../../services";
import styles from './Movies.module.css'

export const MoviesList = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        moviesService.getMovies()
            .then(response => setMovies(response.data.results))
    }, []);

    return (
        <div className={styles.movieList}>
            <div className={styles.moviesWrap}>
                {
                    movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
                }
            </div>
        </div>
    );
};