import { useState } from "react";
import { FaStar} from "react-icons/fa";
import TooltipMUI from "../common/TooltipMUI";
import {  PiPaperPlaneTiltLight } from "react-icons/pi";
import Image from "next/image";
import StarRatingAnimated from "../common/StarRatingAnimated";
import { getInitial } from "@/app/util/getInitial";




const RatingCard = ({ userName = 'Shivam Mittal', rate = 3.8, photo, comment, dateAndtime = "December 4, 2020 at 3:12 pm" }) => {
    const name = getInitial(userName);


    return <div className="flex flex-col gap-1 border-b-[1px] border-b-gray-300 py-5">
        <section className="text-sm font-semibold flex flex-wrap items-center gap-3">
            <section className="flex gap-1 items-center">
                {
                    !photo && <span className="w-[40px] h-[40px] rounded-full bg-gray-200 text-[18px] centerMe">
                        { name }
                    </span>
                }
                {
                    photo && <Image
                        src={photo}
                        width={40}
                        height={40}
                        className="w-[40px] h-[40px] rounded-full"
                        alt={userName}
                    />
                }
                <span className="capitalize text-textLink"> {userName} </span>
            </section>
            <div className="px-1.5 bg-green-600 rounded-md flex gap-1 items-center text-textWhites">
                <span>{rate}</span>
                <FaStar size={13}/>
            </div>
        </section>
        <p>
            {comment}
        </p>

        {/* <div className="flex gap-1 items-center ml-auto text-sm text-textLink">
            <span> <IoCalendarOutline /> </span>
            <span> {dateAndtime} </span>
        </div> */}
    </div>
}


function RatingAndReviews({ rate, reviews }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleRating = (rate) => {
        setRating(rate);
    };

    const handleMouseEnter = (rate) => {
        setHover(rate);
    };

    const handleMouseLeave = () => {
        setHover(0);
    };

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center flex-wrap justify-between gap-2">
                <section className='flex gap-5 items-center text-[calc(20px+.3vw)]'>
                    <span className="font-semibold"> Rating & Reviews </span>
                    <div className='rounded-md flex gap-1 items-center text-textWhites bg-green-600 px-3 text-[18px] py-0.5 '>
                        <span> {rate?.rate} </span>
                        <span> <FaStar /> </span>
                    </div>

                    <div className='flex  gap-1 items-center text-[18px] py-0.5'>
                        <span> by {rate?.people} people </span>
                    </div>
                </section>

                <TooltipMUI href="#rateAndReviews" icon="Rate This" className={`px-3 py-1 rounded-md bg-bgPrimary shadow hover:bg-bgWhites hover:text-textPrimary`} />
            </div>

            <section className="flex flex-col mt-7">
                {
                    reviews && reviews.map((item, index) =>
                        <RatingCard rate={item.rate} comment={item.review} userName={item?.user?.username} key={index} />
                    )
                }


            </section>

            <form className="flex flex-col">

                <div className="flex mb-3 gap-1 text-2xl">
                    <StarRatingAnimated rating={rating} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} hover={hover} handleRating={handleRating} />
                </div>


                <label className="flex gap-0 items-center h-11 bg-red-100 border-[1px] border-gray-300 rounded-md overflow-hidden" id="rateAndReviews">
                    <input
                        type="text"
                        className="py-0.5 px-3 focus:outline-none w-full h-full"
                        placeholder="Rate this product"
                    />
                    <TooltipMUI icon={<PiPaperPlaneTiltLight size={25} />} className={`bg-bgPrimary text-textWhites centerMe px-3.5 h-11`} />
                </label>
            </form>



        </div>
    )
}

export default RatingAndReviews