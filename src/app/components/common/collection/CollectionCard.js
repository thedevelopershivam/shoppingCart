import Image from "next/image"
import ArrowButton from "../ArrowButton";


function CollectionCard() {
  return (
    <div className="w-full relative">
      <Image
        src="/assets/images/banners/bg.png"
        width={1020}
        height={720}
        className="w-full h-full"
        alt="Product Name"
        title="Product Name"
        style={{ objectFit: "cover" }}
      />

      <section className="absolute left-6 top-0 bottom-0">

        <div className="flex flex-col gap-1 justify-center my-auto h-full max-w-[200px] text-sm">
          <span className="text-textGrays">
            Smart Offer
          </span>
          <span className="text-[calc(17px+0.5vw)] leading-6 text-textPrimary">
            Save 20% on Woman Bag
          </span>
          <ArrowButton />
        </div>

      </section>

    </div>
  )
}

export default CollectionCard