import React from 'react'
import Wrapper from '../Wrapper'
import { H1 } from '../Headings'
import CarouselSideImg from './CarouselSideImg'
import { RiCoupon3Line } from "react-icons/ri";
import ProductCarousel from './ProductCarousel';
import Link from 'next/link';
import ButtonCollection from '../product/ButtonCollection';

function ProductCarouselWithSideBanner({ 
    isButtonCollection,
    productCarouselData 
}) {
    return (

        <Wrapper className="flex flex-col gap-0 md:gap-4 px-[5vw]">
            <div className='flex justify-between items-center gap-2'>
                <H1 icon={<RiCoupon3Line />}>
                    <span> Monthly </span>
                    <span className='text-textGrays'> Best Sell </span>
                </H1>
                {
                    isButtonCollection
                    ? <ButtonCollection />
                    : <Link href="#" className="text-textPrimary hover:text-blue-500 duration-300 underline font-semibold">
                        View More
                    </Link>
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div className="my-auto">
                    <CarouselSideImg />
                </div>

                <section className=" md:col-span-3 my-auto">
                    <ProductCarousel data={productCarouselData} />
                </section>

            </div>
        </Wrapper>
    )
}

export default ProductCarouselWithSideBanner