import ProductCard from "@/app/components/common/ProductCard"
import Wrapper from "@/app/components/common/Wrapper"

function page()
{
    return <Wrapper className="px-[5vw] grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>

    </Wrapper>  
}


export default page