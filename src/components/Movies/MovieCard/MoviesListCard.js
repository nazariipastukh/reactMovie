import {Link} from "react-router-dom";
import {urls} from "../../../constants";
import {StartRating} from "../StarRating/StartRating";
import {useState} from "react";
import styles from './MovieListCard.module.css'


export const MoviesListCard = ({movie}) => {
    const {id, title, poster_path, vote_average} = movie
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.card}
             onMouseEnter={() => setIsActive(true)}
             onMouseLeave={() => setIsActive(false)}>

            {isActive && <StartRating vote_average={vote_average}/>}

            <Link to={`/movies/${id}`}>
                <img src={`${urls.poster}${poster_path}`} alt={'moviePoster'}/>
            </Link>

            <Link to={`/movies/${id}`}>
                {title}
            </Link>
        </div>
    );
};