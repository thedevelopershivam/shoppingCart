import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function TinyProductCard({ image = "http://localhost:8000/files/images/compress/1718258742852_3342_thumbnail-6.jpg", title, href = "#" }) {
  return (
    <Link
      href={href}
      className='flex flex-col gap-2 justfiy-center items-center w-full sm:w-[150px] capitalize font-medium text-textPrimary duration-300 hover:scale-95 hover:shadow-none mx-auto'
    >
      <div className='h-[150px] w-[150px] overflow-hidden flex justify-center items-center rounded shadow-lg text-textPrimary'>
        <Image
          src={image}
          className='w-full h-auto'
          width={150}
          height={150}
          alt={title}
        />
      </div>
      {title}
    </Link>
  )
}

export default TinyProductCard