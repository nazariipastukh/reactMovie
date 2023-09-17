import {urls} from "../../../../constants";
import {StartRating} from "../../StarRating/StartRating";
import {useState} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import styles from './MainPageCard.module.css'

export const MainPageCard = ({movie}) => {
    const {id, title, poster_path, vote_average} = movie
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate()
    const {themeCheck} = useSelector(state => state.theme)

    return (
        <div className={`${styles.card} ${themeCheck ? '' : styles.light}`}
             onMouseEnter={() => setIsActive(true)}
             onMouseLeave={() => setIsActive(false)}

             onClick={() => navigate(`/movies/${id}`)}>

            {isActive && <StartRating vote_average={vote_average}
                                      starDimension={'10px'}
                                      divider={2}
                                      numberOfStars={5}/>}

            <img src={`${urls.poster}${poster_path}`} alt={'moviePoster'}/>
            <p>{title}</p>
        </div>
    );
};