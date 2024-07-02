import Wrapper from "@/app/components/common/Wrapper"
import Profile from "@/app/components/profile/Profile"
import Image from "next/image"


function NameCard({ src = "/assets/images/dress5.jpg", name="Guest" }) {
    return <div className="shadow border-[1px] border-gray-200 p-3 flex gap-3 items-center">
        <Image src={src} className="w-16 h-16 rounded-full" width={80} height={80} />
        <div className="flex flex-col justify-center ">
            <span className="text-sm leading-4">
                Hello,
            </span>
            <h1 className="font-medium text-xl leading-5">
                {name}
            </h1>
        </div>
    </div>
}

function page() {
    return (
        <Wrapper className="grid lg:grid-cols-7 px-[5vw] my-10 gap-10">
            <section className=" lg:col-span-2 flex flex-col">
                <NameCard />
            </section>
            <section className=" lg:col-span-5 lg:grid-cols-1 lg:p-3">
                <Profile />
            </section>
        </Wrapper>
    )
}

export default page