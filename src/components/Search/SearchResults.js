import {useLocation} from "react-router-dom";
import {MoviesListCard} from "../Movies";
import {useSelector} from "react-redux";
import styles from "../Movies/MoviesComponent/Movies.module.css";

export const SearchResults = () => {
    const location = useLocation();
    const searchData = location.state?.searchData
    const {isLoading} = useSelector(state => state.loading)

    return (
        <div className={`${styles.movieList} ${isLoading ? styles.movieListLoad : ''}`}>
            <div className={styles.moviesWrap}>
                {
                    searchData.map(movie => <MoviesListCard movie={movie} key={movie.id}/>)
                }
                {searchData.length === 0 && (
                    <div style={{height: '89vh'}}>
                        <h1>Movie not found</h1>
                    </div>
                )}
            </div>
        </div>
    );
};