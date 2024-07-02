import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const Heading = ({ children }) => <h3 className='text-xl font-semibold text-textPrimary py-1 border-b border-b-gray-300'>
    {children}
</h3>
const CollectionCard = () => {
    return <Link href="" className='w-full flex gap-1 p-1 border-[1px] border-gray-200 shadow-md hover:shadow-none duration-300 rounded'>
        <div className='h-26 w-26 centerMe'>
            <Image src="/assets/images/dress4.jpg" className="" width={100} height={100} alt="productName" title="product Name" style={{objectFit: "cover"}} />
        </div>
        <div className='flex flex-col'>
            <span className='line-clamp-2 text-sm font-semibold'>
                Cartoon Astronaut T-Shirts
            </span>

            <span className='text-sm'>
                ₹ 900
            </span>
        </div>

    </Link>
}


function NewProducts() {
  return (
    <div className="w-full rounded border-[1px] border-gray-200 flex flex-col gap-2 px-4 shadow-lg pb-4 pt-2 ">
        <Heading> New Collection </Heading>

        <CollectionCard/>
        <CollectionCard/>
        <CollectionCard/>
        <CollectionCard/>
        <CollectionCard/>

    </div>
  )
}

export default NewProducts