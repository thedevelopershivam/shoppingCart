import Wrapper from "./Wrapper"
import { CiMail } from "react-icons/ci";

function NewsLetter() {
  return (
    <Wrapper className="px-[5vw] bg-bgPrimary grid grid-cols-1  md:grid-cols-4 lg:grid-cols-3 gap-5 items-center text-textWhites py-5 w-full">

      <div className="flex justify-center gap-3 items-center w-full">
        <CiMail size={50} />
        <span className="text-xl"> Sign up to Newsletter </span>
      </div>

      <div className="w-full text-center md:text-start items-center">
        ...and receive $25 coupon for first shopping.
      </div>

      <div className="flex w-full justify-center md:col-span-2 lg:col-span-1">

        <input type="email" className="py-1.5 text-lg-md rounded-l px-3 focus:outline-none text-textGrays h-10 w-auto" placeholder="Enter Your email" />

        <button type="button" className="bg-bgBlacks text-textWhites px-3 rounded-r-md h-10"> Subscribe </button>

      </div>


    </Wrapper>
  )
}

export default NewsLetter