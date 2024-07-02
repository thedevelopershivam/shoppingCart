import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'

function ProductBanner() {
  return (
      <Wrapper className="w-full px-[5vw] relative">
            <Image src="/assets/images/banners/banner2.png" width={1024} height={400} className='w-full h-full border-[1px] border-green-800 shadow-md' alt="service banner" style={{objectFit: 'contain'}} />

      </Wrapper>
  )
}

export default ProductBanner