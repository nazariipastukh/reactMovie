import StarRatings from "react-star-ratings/build/star-ratings";

export const StartRating = ({vote_average, starDimension, divider, numberOfStars}) => {
    return (
        <div>
            <StarRatings rating={vote_average / divider}
                         numberOfStars={numberOfStars}
                         starDimension={starDimension}
                         starSpacing="3px"
                         starRatedColor={'#352F44'}/>
        </div>
    );
};