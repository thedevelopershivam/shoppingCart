"use client"
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import Wrapper from '../Wrapper';
import ProductCard from '../ProductCard';
import { discountCalculation } from '@/app/util/discountCalculation';

// import ProductCard from '../../../com';




function ProductCarousel({ data }) {
    
    return (
        <Wrapper>
            <Carousel
                // dotListClass=""
                // className=""
                // sliderClass=""
                // itemClass=""
                additionalTransfrom={0}
                arrows={true}
                autoPlaySpeed={3000}
                centerMode={false}
                containerClass="container-fluid"
                draggable
                focusOnSelect={false}
                infinite={false}
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind={true}
                showDots={false}
                slidesToSlide={1}
                swipeable
            >
                {
                    data?.map((item, index) => 
                    {
                    return <div className='px-2 lg:px-3'>

                        <ProductCard
                            id={item?.id}
                            addToCartData={item}
                            badge={'sale'}
                            rating={`${item?.rates[0]?.rate} by ${item?.rates[0]?.people}`}
                            sizes={item?.productSizeNquantities}
                            images={item?.compressFiles !== null && JSON.parse(item?.compressFiles)}
                            productName={item.productName}
                            brand={item?.brand}
                            deletedPrice={item?.price}
                            price={!item?.coupon ? item.price : discountCalculation(item?.coupon?.disType, item?.coupon?.discount, item?.price)}
                            key={index}
                        />
                    </div>}
                    )
                }

            </Carousel>
        </Wrapper>
    )
}

export default ProductCarousel