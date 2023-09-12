import {useNavigate} from "react-router-dom";
import {urls} from "../../../constants";
import {StartRating} from "../StarRating/StartRating";
import {useState} from "react";
import styles from './MovieListCard.module.css'

export const MoviesListCard = ({movie}) => {
    const {id, title, poster_path, vote_average} = movie
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate()

    return (
        <div className={styles.card}
             onMouseEnter={() => setIsActive(true)}
             onMouseLeave={() => setIsActive(false)}

             onClick={() => navigate(`/movies/${id}`, {state: {movie}})}>

            {isActive && <StartRating vote_average={vote_average}
                                      starDimension={'16px'}
                                      divider={2}
                                      numberOfStars={5}/>}

            <img src={`${urls.poster}${poster_path}`} alt={'moviePoster'}/>
            <p>{title}</p>
        </div>
    );
};