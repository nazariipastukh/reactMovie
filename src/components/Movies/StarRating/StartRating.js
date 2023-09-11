import StarRatings from "react-star-ratings/build/star-ratings";
import styles from './StarRating.module.css'

export const StartRating = ({vote_average}) => {
    return (
        <div className={styles.rating}>
            <StarRatings rating={vote_average / 2} starDimension="16px" starSpacing="3px"/>
        </div>
    );
};