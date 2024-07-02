
import Wrapper from '../common/Wrapper'
import { H1 } from './../common/Headings';
import ProductCarousel from '../common/productCarousel/ProductCarousel';
import ProductCard from '../common/ProductCard';

function AllProducts({ data }) {

    return (<Wrapper className="flex flex-col gap-0 md:gap-10 px-[5vw]">
        {
            data?.map((item, index) =>
                <div className='flex flex-col' key={index}>
                    <H1 className="capitalize"> {item?.category} </H1>
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-5">
                        {
                            item?.products?.map((item, index) =>
                                <ProductCard
                                    id={item?.id}
                                    addToCartData={item}
                                    rating={`${item?.rates[0]?.rate} by ${item?.rates[0]?.people}`}
                                    sizes={item?.productSizeNquantities}
                                    images={item?.compressFiles !== null && JSON.parse(item?.compressFiles)}
                                    productName={item.productName}
                                    brand={item?.brand}
                                    deletedPrice={item?.price}
                                    price={!item?.coupon ? item.price : discountCalculation(item?.coupon?.disType, item?.coupon?.discount, item?.price)}
                                    key={index}
                                />
                            )
                        }
                    </div>
                </div>

            )
        }
    </Wrapper>
    )
}

export default AllProducts