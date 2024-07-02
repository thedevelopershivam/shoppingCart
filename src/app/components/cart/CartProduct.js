import Link from "next/link";
import Image from 'next/image';
import TooltipMUI from "../common/TooltipMUI";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsTrash3 } from "react-icons/bs";
import TooltipButton from "../common/TooltipButton";
import Counter from "../product/Counter";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import ProductCounter from "../cartItem/ProductCounter";





function PriceTag({ heading, title }) {
    return <div className="flex capitalize gap-1.5">
        <span className="font-semibold"> {heading} </span>
        <span> {title} </span>
    </div>
}

function CartProduct({ image = "/assets/images/dress5.jpg" }) {
    return <div className="flex flex-col gap-2 border-b-[1px] border-b-gray-300 pb-4">
        <div className="flex gap-4 ">
            <div className="max-h-[150px]">
                <Image src={image} className="max-w-[150px] max-h-[150px]" width={150} height={150} alt="product image" title="product image" style={{ objectFit: "contain" }} />
            </div>

            <div className="max-h-[150px] flex flex-col gap-0">
                <span className="text-xl text-green-600"> Ladies Saries </span>
                <section className="flex flex-col">
                    <PriceTag heading="Brand:" title={'Armani'} />
                    <PriceTag heading="Price:" title={'2345'} />
                    <div className="mt-2 flex flex-start">
                        <ProductCounter buttonClass="h-6 hover:shadow" inputClass="border-[1px] border-gray-200 hideSpinner px-1"/>
                    </div>
                    
                </section>
            </div>


        </div>
        <div className="flex justify-between gap-2">
            <TooltipMUI
                className="w-auto h-full bg-pink-600 rounded-md px-3 py-1.5"
                icon={'Add to favourite'}
            />

            <TooltipMUI
                className="bg-red-600 centerMe shadow w-auto px-3 py-1.5 rounded "
                icon={"Delete"}
            />
        </div>

    </div>

}

export default CartProduct;