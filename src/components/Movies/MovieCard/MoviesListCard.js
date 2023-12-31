import {useNavigate} from "react-router-dom";
import {urls} from "../../../constants";
import {StartRating} from "../StarRating/StartRating";
import {useState} from "react";
import {useSelector} from "react-redux";
import styles from './MovieListCard.module.css'

export const MoviesListCard = ({movie}) => {
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
                                      starDimension={'16px'}
                                      divider={2}
                                      numberOfStars={5}/>}
            {
                poster_path ? (
                    <img src={`${urls.poster}${poster_path}`} alt={'moviePoster'}/>
                ) : (
                    <img
                        src={'https://schoolyearsphotoframes.com.au/cdn/shop/products/SORRYNOIMAGEAVAILABLE.png?v=1647569546'}
                        alt={'moviePoster'}/>
                )
            }
            <p>{title}</p>
        </div>
    );
};