import {useLocation} from "react-router-dom";
import {urls} from "../../../constants";
import {StartRating} from "../../../components";
import styles from './MovieInfo.module.css'

export const MovieInfo = () => {
    const {state: {movie: {title, overview, backdrop_path, vote_average, release_date}}} = useLocation();

    return (
        <div className={styles.background}>
            <div className={styles.imageBlock}>
                <img src={`${urls.poster}${backdrop_path}`} alt={'moviePoster'}></img>
            </div>

            <div className={styles.detailsBlock}>
                <h1>{title}</h1>
                <h3>{release_date.slice(0, 4)}</h3>

                <div className={styles.vote}>
                    <StartRating vote_average={vote_average}
                                 starDimension={'26px'}
                                 divider={1}
                                 numberOfStars={10}/>
                    <h3>{vote_average}/10</h3>
                </div>

                <div className={styles.overview}>
                    <h3>{overview}</h3>
                </div>
            </div>
        </div>
    );
};