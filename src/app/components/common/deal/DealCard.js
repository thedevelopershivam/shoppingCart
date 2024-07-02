import Image  from 'next/image';
import Link from 'next/link';
function DealCard({ image}) {
  return (
    <Link href="" className="flex flex-col md:flex-row md:gap-1 items-center shadow duration-300 hover:shadow-none hover:border-gray-100 box-border border-[1px] border-gray-100">
        {/* <div className="w-full h-full md:w-[70px] md:h-[70px]"> */}
            <Image 
                src={image || "/assets/images/thumbnails/thumbnail-3.jpg"} 
                width={1920} 
                height={1080} 
                className='md:max-w-[70px] md:max-h-[70px]'
                alt="product name"
                style={{ objectFit: "cover" }}
            />
        {/* </div> */}
          <div className='flex flex-col pb-2 pt-1 md:pb-0 text-center md:text-start md:mx-0 px-3 md:px-1'>
              <span className='leading-5 text-[15px] line-clamp-1'> 
                  Fish Print Patched T-shirt Fish Print Patched T-shirt 
            </span>
              <section className='text-textPrimary flex flex-wrap justify-center md:justify-start text-center gap-x-2.5 w-full'>
                <span className='font-semibold md:leading-4'> 580.70₹ </span>
                  <del className='text-textGrays text-center md:leading-4'> 580.70₹ </del>
            </section>
        </div>
    </Link>
  )
}

export default DealCard