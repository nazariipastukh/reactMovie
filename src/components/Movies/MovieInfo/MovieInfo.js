import {useParams} from "react-router-dom";
import {urls} from "../../../constants";
import {GenreBadge, StartRating} from "../../../components";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {movieByIdActions} from "../../../redux/slices";
import styles from './MovieInfo.module.css';

export const MovieInfo = () => {
    const {id} = useParams();
    const dispatch = useDispatch()
    const {movieById} = useSelector(state => state.movieById)
    const {title, release_date, vote_average, overview, genres, backdrop_path} = movieById || {};

    useEffect(() => {
        dispatch(movieByIdActions.getMovieById(id))
    }, [dispatch, id])

    return (
        <div className={styles.background}>
            {movieById && (
                <div className={styles.wrapper}>
                    <div className={styles.imageBlock}>
                        <img src={`${urls.poster}${backdrop_path}`} alt={'moviePoster'}></img>
                    </div>
                    <div className={styles.detailsBlock}>
                        <h1>{title}</h1>
                        <h3>{release_date.slice(0, 4)}</h3>
                        <div className={styles.vote}>
                            <StartRating
                                vote_average={vote_average}
                                starDimension={'26px'}
                                divider={1}
                                numberOfStars={10}
                            />
                            <h3>{vote_average}/10</h3>
                        </div>
                        <div className={styles.overview}>
                            <h3>{overview}</h3>
                        </div>
                        <div className={styles.badges}>
                            {
                                genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};