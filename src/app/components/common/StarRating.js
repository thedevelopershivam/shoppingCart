import React from 'react';
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from "react-icons/ti";

function Star({ filled, half, color }) {
    if (filled) {
        return <TiStarFullOutline size={18} color={color} />;
    } else if (half) {
        return <TiStarHalfOutline size={18} color={color} />;
    } else {
        return <TiStarOutline size={18} color={color} />;
    }
}

function StarRating({ percentage = 68, children, color = "#ffa534" }) {
    const totalStars = 5;
    const filledStars = Math.floor(percentage / 20);
    const halfStar = percentage % 20 >= 10;
    const emptyStars = totalStars - filledStars - (halfStar ? 1 : 0);

    return (
        <div className='flex gap-2 text-sm'>
            <div className='centerMe xs:gap-0 sm:gap-0.5'>
                {[...Array(filledStars)].map((_, i) => <Star key={`full-${i}`} filled color={color} />)}
                {halfStar && <Star half color={color} />}
                {[...Array(emptyStars)].map((_, i) => <Star key={`empty-${i}`} color={color} />)}
            </div>
            <span className='text-textGrays font-semibold'> {children} </span>
        </div>
    );
}

export default StarRating;
