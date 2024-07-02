import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

function FavHeart({ isFavProduct = true, fav = true}) {
  return ( isFavProduct &&
        <div className="flex gap-2 flex-wrap absolute top-2 right-2 z-[99] cursor-pointer">
            {
                fav ?
              <IoHeartSharp className="text-red-500 fav hover:scale-[1.1]  hover:animate-pulse" size={25} /> 
                : 
              <IoHeartOutline className="hover:scale-[1.1] hover:animate-pulse" size={25} />
            }
        </div>
    
  )
}

export default FavHeart