import Wrapper from "../Wrapper"
import CarouselSideImg from "../productCarousel/CarouselSideImg"
import DealCard from "./DealCard"


function Heading({ first, second }) {
    return <section className="border-b-[1px] border-gray-300 text-[calc(20px+0.3vw)] text-textGrays flex gap-2.5 font-semibold">
        <span
            className="text-textPrimary">
            {first}
        </span>
        <span>
            {second}
        </span>
    </section>
}


function DealCardWrapper() {
    return (
        <Wrapper className="px-[5vw] grid grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-10 md:gap-x-7 md:gap-5">

            <div className="centerMe">
                <CarouselSideImg image="/assets/images/banners/banner-10.jpg" />
            </div>
            <div className="flex flex-col gap-3">
                <Heading first="Deals" second="& Outlet" />
                <Wrapper className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-y-3 gap-x-3 md:gap-x-7">
                    <DealCard image="/assets/images/thumbnails/thumbnail-6.jpg" />
                    <DealCard image="/assets/images/thumbnails/thumbnail-4.jpg" />
                    <DealCard image="/assets/images/thumbnails/thumbnail-5.jpg" />
                </Wrapper>
            </div>
            <div className="flex flex-col gap-3">
                <Heading first="Top" second="Selling" />
                <Wrapper className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-1 sm:grid-cols-3 gap-y-3 gap-x-3 md:gap-x-7">
                    <DealCard image="/assets/images/thumbnails/thumbnail-6.jpg" />
                    <DealCard image="/assets/images/thumbnails/thumbnail-4.jpg" />
                    <DealCard image="/assets/images/thumbnails/thumbnail-5.jpg" />
                </Wrapper>
            </div>
            <div className="flex flex-col gap-3">
                <Heading first="Hot" second="Releases" />
                <Wrapper className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-1 sm:grid-cols-3 gap-y-3 gap-x-3 md:gap-x-7">
                    <DealCard image="/assets/images/thumbnails/thumbnail-6.jpg" />
                    <DealCard image="/assets/images/thumbnails/thumbnail-4.jpg" />
                    <DealCard image="/assets/images/thumbnails/thumbnail-5.jpg" />
                </Wrapper>
            </div>

        </Wrapper>
    )
}

export default DealCardWrapper