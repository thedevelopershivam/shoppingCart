import TinyProductCard from '../common/TinyProductCard'

function ProductsCategoryWrapper({ productData }) {

  return (
      <div className='grid justify-center items-center grid-cols-2 md:grid-cols-4 md:gap-6 gap-2 sm:gap-4 mx-auto content-center '>

        {
          productData?.map((item, index) =>
            <TinyProductCard
              href={`/${item.title}`}
              image={item.compressFile}
              alt={item.title}
              title={item.title}
              key={index}
            />
          )
        }
      </div>
    
  )
}

export default ProductsCategoryWrapper