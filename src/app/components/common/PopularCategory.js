import Image from "next/image"
import Wrapper from "./Wrapper"
import Link from "next/link"
import { H1 } from "./Headings"

function Card({ children, image ="/assets/images/dress5.jpg", alt }) {
    return <Link href="" className="flex flex-col rounded-md shadow-md border-[1px] border-gray-200 duration-300 hover:shadow-none">

        <section className="centerMe">
            <Image
                src={image}
                className="w-full h-full rounded-t-md"
                width={400}
                alt={alt || children}
                height={400}
                
                title="category name"
                style={{ objectFit: "contain" }}
            />
        </section>
        <section className="text-center centerMe px-2 h-[60px] rounded-b-md font-semibold capitalize">
            <span className="line-clamp-2 leading-5">
                {children || "this is a ladies salwar suit "}
            </span>
        </section>
    </Link>
}


function PopularCategory({ subCategory }) {
    return (
        <Wrapper className="flex flex-col gap-2 px-[5vw]">
            <H1>
                <span>Popular</span>
                <span className="text-textGrays">Categories</span>
            </H1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
                {
                    subCategory && subCategory?.map((item, index) =>
                        <Card alt={item.subCategory} image={item.compressFile} key={index}>
                            {item.subCategory}
                        </Card>
                    )
                }
            </div>
        </Wrapper>
    )
}

export default PopularCategory