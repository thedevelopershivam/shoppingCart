import Image from "next/image"
import ArrowButton from "../ArrowButton"

function CarouselSideImg({image}) {
  return (
    <div className="max-w-[300px] w-full rounded-md hidden md:flex relative ">
      <div>
        <Image src={image || "/assets/images/banners/carouselSideImg1.png"}
          width={200}
          height={200}
          className="w-full h-full"
          alt="first product"
          style={{ objectFit: "cover" }}
          
        />
      </div>

      <div className="absolute top-0 bottom-0 my-auto px-3 flex items-center flex-col">
        <div className="flex flex-col my-auto">
          <span className="text-sm text-gray-200">
            Women Area
          </span>
          <span className="text-[calc(20px+.2vw)] text-textWhites font-semibold leading-6 max-w-[150px]">
            Save 20% on clothings
          </span>
          <ArrowButton className="font-semibold text-textWhites" />
        </div>
      </div>
    </div>
  )
}

export default CarouselSideImg