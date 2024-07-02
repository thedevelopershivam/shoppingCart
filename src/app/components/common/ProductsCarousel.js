"use client"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import WithStyles from './WithStyles'
import Wrapper from './Wrapper';
import { useState } from 'react';
import Image from 'next/image';



function ProductsCarousel({
    images, imageClassName, imageWrapperClassName, arrows = true, showDots = true, autoPlay = false, autoPlaySpeed = 2500, alt }) {

    const [isPaused, setIsPaused] = useState(false);
    const [fileData, setFileData] = useState(
        (images !== null && images !== undefined && images !== '' && images) || ["/assets/images/explore.png"]
    );

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };


    return (
        <Wrapper className='z-[0] w-full'>
            <Carousel
                className='z-0'
                // swipeable={true}
                // draggable={true}
                // additionalTransfrom={0}
                // arrows={arrows}
                // autoPlay={true}
                // autoPlaySpeed={5000}
                //   className="w-full animation-play-state-start"
                // // rewind={true}
                // infinite={true}
                // ssr={true} 
                // transitionDuration={500}
                containerClass="container-fluid z-0"
                // dotListClass=""
                // focusOnSelect={false}
                // rewindWithAnimation={true}
                // keyBoardControl
                // minimumTouchDrag={80}
                // pauseOnHover
                // renderArrowsWhenDisabled={false}
                // renderButtonGroupOutside={false}
                // renderDotsOutside={false}

                // responsive={{
                //     desktop: {
                //         breakpoint: {
                //             max: 1536,
                //             min: 1024
                //         },
                //         items: 1,
                //         partialVisibilityGutter: 40
                //     },
                //     mobile: {
                //         breakpoint: {
                //             max: 464,
                //             min: 0
                //         },
                //         items: 1,
                //         partialVisibilityGutter: 30
                //     },
                //     tablet: {
                //         breakpoint: {
                //             max: 1024,
                //             min: 464
                //         },
                //         items: 1,
                //         partialVisibilityGutter: 30
                //     }
                // }}
                // // rewindWithAnimation={false}
                // rtl={false}
                // shouldResetAutoplay
                // showDots={true}
                // sliderClass=""
                // slidesToSlide={1}
                // swipeable

                // testing below
                arrows={arrows}
                showDots={ fileData.length > 1 && showDots}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 1536,
                            min: 1024
                        },
                        items: 1,
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
                        items: 1,
                        partialVisibilityGutter: 30
                    }
                }}
                infinite={fileData.length > 1 && true}
                autoPlay={autoPlay || isPaused}
                autoPlaySpeed={autoPlaySpeed}
                pauseOnHover={false}
            >

                {
                    fileData && fileData.map((item, index) =>
                        <div className={imageWrapperClassName} key={index}>
                            <Image
                                onMouseOver={handleMouseEnter}
                                onMouseOut={handleMouseLeave}
                                src={item}
                                className={`w-full ${imageClassName}`}
                                width={500}
                                height={500}
                                alt={alt || item}
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    )
                }
            </Carousel>
        </Wrapper>
    )
}

export default ProductsCarousel