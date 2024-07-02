import { discountCalculation } from '@/app/util/discountCalculation'
import ProductCard from '../common/ProductCard'


function RelatedProducts({ data }) {

  return (
    <div className="flex flex-col gap-1 mt-16">
      <h1 className='flex text-[calc(25px+.4vw)] border-b-[1px] border-gray-300 mb-5 font-semibold'>
        Related Posts
      </h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {
          data && data.map((item) => {
            discountCalculation()
            return (
              <ProductCard
                id={item.id}
                addToCartData={item}
                key={Math.random()}
                deletedPrice={item.price}
                rating={item?.rates.rate}
                price={!item?.coupon ? item.price : discountCalculation(item?.coupon?.disType, item?.coupon?.discount, item?.price)}
                sizes={item?.productSizeNquantities}
                productName={item?.productName}
                brand={item?.brand}
                images={item?.compressFiles !== null && JSON.parse(item?.compressFiles)}
              />
            )
          }
          )
        }


      </div>


    </div>
  )
}

export default RelatedProducts