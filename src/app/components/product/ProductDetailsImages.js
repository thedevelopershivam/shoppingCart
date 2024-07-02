import Image from 'next/image'


const Thumbnail = ({ src, productName = "support 24*7" }) => {
  return <Image src={src} className='max-h-[100px] max-w-[100px] w-full snap-center' width={100} height={100} alt={productName} title={productName} style={{ objectFit: "contain" }} />
}

function ProductDetailsImages({ image = ["/assets/images/dress6.jpg"], productName }) {

  return (
    <div className="centerMe flex-col gap-1 sticky top-1 w-full md:px-2">

      <Image src={image[0]} className={`max-h-[${image.length > 1 ? "450px" : "auto"}] max-w-full w-full`} width={200} height={200} alt={productName} title={productName} style={{ objectFit: "contain" }} />
      {
        image && image.length > 1 &&
        <section className="w-full flex justify-center">
          <div className="flex gap-1 overflow-x-auto hs py-1">
            <Thumbnail src="/assets/images/dress6.jpg" />
            <Thumbnail src="/assets/images/dress5.jpg" />
            <Thumbnail src="/assets/images/dress7.jpg" />
            <Thumbnail src="/assets/images/dress1.jpg" />
            <Thumbnail src="/assets/images/dress2.jpg" />
          </div>
        </section>
      }

    </div>

  )
}

export default ProductDetailsImages