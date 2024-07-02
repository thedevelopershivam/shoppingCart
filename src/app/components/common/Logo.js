import Image from "next/image";

function Logo() {
  return (
    <Image src="/assets/images/dress1.jpg" className="w-[35px] h-[35px] rounded-full" width={100} height={100} alt="company name" style={{objectFit:"cover"}}/>
  )
}

export default Logo