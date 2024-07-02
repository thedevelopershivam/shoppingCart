import CartProduct from '@/app/components/cart/CartProduct'
import ProductSummary from '@/app/components/cart/ProductSummary'
import Wrapper from '@/app/components/common/Wrapper'

function page() {
  return (
    <Wrapper className="px-[5vw] grid grid-cols-1 md:grid-cols-5 gap-6 py-10">
      <div className='md:col-span-3 flex flex-col gap-4'>
        <CartProduct/>
        <CartProduct/>
        <CartProduct/>
      </div>
      <div className='md:col-span-2 grid-start '>
        <ProductSummary/>
      </div>
    </Wrapper>
  )
}

export default page