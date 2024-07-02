
import React, {  useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

function RatingStar({ totalStars = 5, onClick }) {
    const [rating, setRating] = useState(0);
    return (
        <div>
            here
            {
                console.log([...Array(totalStars)].map((item, index)=> { return <span className="text-black">
                    {index}
                    </span>}
                ))
            }
        </div>
    );
}

export default RatingStar;
