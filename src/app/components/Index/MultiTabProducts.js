import React from 'react'
import { Button } from '../common/Buttons'
import ProductCard from '../common/ProductCard';
import Wrapper from '../common/Wrapper';



function MultiTabProducts({ featureData, saleData }) {

  return (
    <Wrapper className="flex flex-col gap-8 mx-auto px-[5vw]">
      {/* <div className='flex flex-wrap gap-5'>
        <Button className="bg-bgSecondary text-textPrimary"> Feature </Button>
        <Button className="bg-bgGrays text-textGrays"> Hot </Button>
        <Button className="bg-bgGrays text-textGrays"> Sale </Button>
      </div> */}

      <span className=' text-[calc(16px+1vw)] font-semibold text-textPrimary '> 
        Top Deals 
      </span>

      <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 md:gap-7'>
        {
          featureData?.map((item, index) => {
            
            return <ProductCard
              id={item.id}
              isPorductCarousel={false}
              isFavProduct={false}
              images={(item.compressFile !== null && item.compressFile) && item.compressFile}
              price={item?.products[0].price}
              productName={item.subCategory}
              brand={item.brand}
              isProductCard={false}
              showDots={true}
              infinite={true}
              key={index}
            />
          }
          )
        }
      </div>

    </Wrapper>
  )
}

export default MultiTabProducts