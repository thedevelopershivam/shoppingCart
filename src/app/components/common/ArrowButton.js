import Link from "next/link"
import { CgArrowLongRight } from "react-icons/cg";

function ArrowButton({className, icon}) {
  return (
    <Link href="#" className={`font-thin flex gap-1 items-center hover:pl-2 hover:text-gray-500 duration-300 mt-1.5 ${className}`}>
          <span> Shop Now </span>
      {
        icon || <CgArrowLongRight size={20} />
      }
      </Link>
  )
}

export default ArrowButton