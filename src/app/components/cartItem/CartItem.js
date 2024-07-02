import Image from 'next/image'
import React from 'react'
import ProductCounter from './ProductCounter'
import Link from 'next/link'

function CartItem() {
    return (
        <Link href="#" className="flex gap-2 w-full border-[1px] rounded border-gray-200 hover:scale-[1.03]">
            <Image src="/assets/images/nature1.jpg" width={80} height={80} style={{ objectFit: "cover" }} />

            <div className='flex flex-col gap-0.5 text-sm '>
                <span className=' font-semibold text-textPrimary line-clamp-1'>
                    If Product Name Is Too Long
                </span>

                <div className='flex items-center gap-2 '>
                    <span className='text-textDanger'> Qty:  </span>
                    <ProductCounter />
                </div>

                <div className='flex items-center gap-2 '>
                    <span className='text-textSuccess'> Price:  </span>
                    880 ₹
                </div>

            </div>
            
        </Link>
    )
}

export default CartItem