import React from 'react'
import NumberFormater from '../common/NumberFormater'


const DiscountPercentage = ({ actualPrice, deletedPrice, discountType, showSpecialPrice = false }) => {
    if (discountType === 'per') {
        const price = actualPrice * 100 / deletedPrice;
        return !showSpecialPrice ? (100 - price) + "% off" : (100 - price) >= 30 && "Special price" ;
    }
    else {
        return;
    }
}

function PriceTag({ originalPrice = 87000, deletedPrice = 100000, discountType }) {
    return (
        <div className='flex flex-col'>
            <span className="text-green-600 font-semibold">
                {
                    <DiscountPercentage actualPrice={originalPrice} deletedPrice={deletedPrice} showSpecialPrice={true} discountType={discountType} />
                }
            </span>
            <div className='flex gap-3 items-center text-xl'>
                <div className="flex text-[calc(20px+.35vw)] font-semibold text-textPrimary">
                    <span>
                        ₹<NumberFormater number={originalPrice} />
                    </span>
                </div>
                <del className='text-gray-500 text-base'>
                    <NumberFormater number={deletedPrice && deletedPrice} />
                </del>

                <span className="text-green-700 text-base font-semibold ">
                    <DiscountPercentage actualPrice={originalPrice} deletedPrice={deletedPrice} />
                </span>

            </div>
        </div>
    )
}

export default PriceTag