import {useParams} from "react-router-dom";
import {urls} from "../../../constants";
import {GenreBadge, StartRating} from "../../../components";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {castActions, movieByIdActions} from "../../../redux/slices";
import styles from './MovieInfo.module.css';
import {ActorComponent} from "./Cast/ActorComponent";

export const MovieInfo = () => {
    const {id} = useParams();
    const dispatch = useDispatch()
    const {movieById} = useSelector(state => state.movieById)
    const {title, release_date, vote_average, overview, genres, backdrop_path} = movieById || {};
    const {cast, crew} = useSelector(state => state.cast)


    useEffect(() => {
        dispatch(movieByIdActions.getMovieById(id))
    }, [dispatch, id])

    useEffect(() => {
        dispatch(castActions.getCredits(id))
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
            {movieById && (
                <div>
                    <h2 className={styles.desc}>Main cast</h2>
                    <div className={styles.castWrap}>
                        {
                            cast.slice(0, 10).map(actor => <ActorComponent actor={actor} key={actor.id}/>)

                        }
                    </div>
                    <h2 className={styles.desc}>Main crew</h2>
                    <div className={styles.castWrap}>
                        {
                            crew.slice(0, 10).map(worker => <ActorComponent actor={worker} key={worker.id}/>)

                        }
                    </div>
                </div>
            )}
        </div>
    );
};