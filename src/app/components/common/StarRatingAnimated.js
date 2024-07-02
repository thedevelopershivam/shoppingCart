import { FaStar } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';



const StarRatingAnimated = ({ totalStars = 5, handleMouseEnter, handleMouseLeave, rating, hover, handleRating }) => {

    return <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center">
            {[...Array(totalStars * 2)].map((_, index) => {
                const ratingValue = (index + 1) / 2;
                return (
                    <label key={index} className="cursor-pointer">
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            className="hidden"
                            onClick={() => handleRating(ratingValue)}
                        />
                        {ratingValue <= (hover || rating) ? (
                            ratingValue % 1 === 0 ? (
                                <FaStar
                                    className="w-10 h-10 text-yellow-500"
                                    onMouseEnter={() => handleMouseEnter(ratingValue)}
                                    onMouseLeave={handleMouseLeave}
                                />
                            ) : (
                                <FaStarHalfAlt
                                    className="w-10 h-10 text-yellow-500"
                                    onMouseEnter={() => handleMouseEnter(ratingValue)}
                                    onMouseLeave={handleMouseLeave}
                                />
                            )
                        ) : (
                            <FaRegStar
                                className="w-10 h-10 text-gray-400"
                                onMouseEnter={() => handleMouseEnter(ratingValue)}
                                onMouseLeave={handleMouseLeave}
                            />
                        )}
                    </label>
                );
            })}
            <p className="ml-4 text-lg font-medium">Rating: {rating}</p>
        </div>
    </div>
}

export default StarRatingAnimated;