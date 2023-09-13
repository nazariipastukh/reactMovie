import StarRatings from "react-star-ratings/build/star-ratings";
import {useSelector} from "react-redux";

export const StartRating = ({vote_average, starDimension, divider, numberOfStars}) => {
    const {themeCheck} = useSelector(store => store.theme)
    return (
        <div>
            <StarRatings rating={vote_average / divider}
                         numberOfStars={numberOfStars}
                         starDimension={starDimension}
                         starSpacing="3px"
                         starRatedColor={themeCheck ? '#141010' : '#352F44'}/>
        </div>
    );
};