import { FaStar } from "react-icons/fa";
function Rating({rating = 4.2, reviews= 23}) {
  return (
      <div className="flex items-center gap-2 text-gray-500 font-semibold text-sm">
        <span className="bg-green-600 px-1 py-[2px] rounded-md text-white flex items-center gap-0.5 text-xs">
            {
                rating
            }
            <FaStar color="white" size={10}/>
        </span>
        <span>
            Rating
        </span>

        
        <div className="flex items-center gap-1">
            {
                reviews
            }
            <span> Reviews </span>
        </div>
    </div>
  )
}

export default Rating