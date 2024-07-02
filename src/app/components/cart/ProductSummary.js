import NumberFormater from "../common/NumberFormater"

const PriceTag = ({ heading, title }) => {
    return <div className="flex justify-between items-center">
        <span className="text-gray-500 font-semibold"> {heading} </span>

        <span> {title} </span>
    </div>
}


function ProductSummary() {
    return (
        <section className="flex flex-col rounded border-[1px] border-gray-200 shadow">
            <h1 className="text-center font-semibold text-xl text-gray-400 py-1 border-[1px] border-b-gray-200"> Price Details </h1>

            <div className="flex flex-col gap-3 p-4">

                <PriceTag
                    heading={"Prices(15 items)"}
                    title={<>
                        <span> ₹ </span>
                        <span> <NumberFormater number={150250} /> </span>
                    </>} />


                <PriceTag
                    heading={"Discount"}
                    title={<>
                        <span> ₹ </span>
                        <span> <NumberFormater number={350} /> </span>
                    </>} />

                <PriceTag
                    heading={"Delivery charges"}
                    title={<>
                        <span> ₹ </span>
                        <span> <NumberFormater number={150} /> </span>
                    </>} />


                <div className="border-t-[1px] border-gray-200 text-textLink font-semibold pt-2 text-xl">
                    <PriceTag
                        heading={"Total"}
                        title={<>
                            <span> ₹ </span>
                            <span> <NumberFormater number={30000} /> </span>
                        </>} />

                </div>



            </div>







        </section >
    )
}

export default ProductSummary