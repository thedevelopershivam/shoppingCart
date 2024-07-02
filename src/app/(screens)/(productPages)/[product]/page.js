"use client"
import TooltipMUI from '@/app/components/common/TooltipMUI';
import Wrapper from '@/app/components/common/Wrapper';
import Colors from '@/app/components/product/Colors';
import Counter from '@/app/components/product/Counter';
import OtherDeatils from '@/app/components/product/OtherDeatils';
import PriceTag from '@/app/components/product/PriceTag';
import ProductDetailsImages from '@/app/components/product/ProductDetailsImages';
import Rating from '@/app/components/product/Rating';
import Sizes from '@/app/components/product/Sizes';

import { useParams, useSearchParams } from 'next/navigation';
import { GoHeart } from "react-icons/go";
import { FaExclamation } from "react-icons/fa6";
import ProductDetails from '@/app/components/product/ProductDetails';
import RatingAndReviews from '@/app/components/product/RatingAndReviews';
import RelatedProducts from '@/app/components/product/RelatedProducts';
import ProductBanner from '@/app/components/common/ProductBanner';
import { useEffect, useState } from 'react';
import axiosInstance from '@/app/util/axiosWithoutLogin';
import IsLoading from '@/app/components/common/IsLoading';
import { discountCalculation } from '@/app/util/discountCalculation';

import { useSelector, useDispatch } from 'react-redux';
import { addCart } from '@/app/redux/slices/cartSlice';




const Heading = ({ children }) => {
    return <span className="text-[calc(18px+.3vw)] text-textPrimary leading-7 capitalize">
        {children}
    </span>
}


function page() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.myCart);
    
    function addData (){
        dispatch(addCart("lorem"))
    }

    const [data, setData] = useState();
    const [suggested, setSuggested] = useState();

    const paramsQuery = new useSearchParams();
    const params = new useParams();
    const pid = paramsQuery.get('id');

    async function getData() {
        const data = await axiosInstance.get(`/product-details/${pid}`)
        console.log({data})
        setData(data?.data?.data);
        setSuggested(data?.data?.suggested);
        
        useDispatch(addCart(setData))
    }

    useEffect(() => {
        getData();
    }, [pid])

    return (
        <div className="flex flex-col gap-20">
            {
                !data ? <IsLoading /> :
                    <Wrapper className={`px-[5vw]`}>
                        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-4 py-4">
                            <section className="md:col-span-2 lg:col-span-1 md:sticky md:top-0 h-auto">
                                <ProductDetailsImages image={JSON.parse(data?.compressFiles)} productName={data?.productName} />
                            </section>
                            <div className="lg:col-span-2 flex flex-col gap-6 md:col-span-3">

                                <Heading>
                                    {data?.productName}
                                </Heading>
                                <div className='flex gap-1 text-sm'>
                                    <span className="font-semibold"> Brand: </span>
                                    <span className="text-textLink ">
                                        {
                                            data?.brand
                                        }
                                    </span>
                                </div>

                                <PriceTag
                                    originalPrice={
                                        !data?.couponId ? data?.price :
                                        discountCalculation(data?.coupon?.disType, data?.coupon?.discount, data?.price)
                                    }
                                    deletedPrice={data?.price}
                                />
                                <Rating rate={data?.rate?.rate} reviews={data?.rate?.people} />
                                {/* <Colors /> */}
                                <Sizes
                                    options={data?.productSizeNquantities}
                                />

                                <div className="flex gap-3 ">
                                    <Counter />
                                    <TooltipMUI
                                        className="w-auto h-full bg-bgPrimary rounded-md px-3 py-1.5"
                                        icon={'Add to cart'}
                                        href={"#"}
                                    // tooltipText="Add item in cart" 
                                    />
                                    <TooltipMUI
                                        icon={<GoHeart size={25} />}
                                        tooltipText="Add to favourite"
                                    />
                                </div>
                                <div className="">

                                </div>


                                <a href='#product-details' className="flex gap-1 items-center text-primary no-underline text-inherit">
                                    <span className="flex w-[25px] h-[25px] centerMe bg-bgSecondary">
                                        <FaExclamation />
                                    </span>
                                    <span className="font-semibold" id="details" onClick={addData}>
                                        Details
                                    </span>
                                </a>

                                <hr />
                                <div>
                                    <OtherDeatils />
                                </div>
                                <ProductDetails>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: data?.details }}></div>
                                </ProductDetails>
                                <hr />

                                <RatingAndReviews
                                    rate={data?.rates[0]}
                                    reviews={data?.rateAndReviews}
                                />

                            </div>
                        </div>
                        <RelatedProducts data={suggested} />

                    </Wrapper>
            }
            <Wrapper>
                <ProductBanner />
            </Wrapper>
        </div>
    )
}

export default page