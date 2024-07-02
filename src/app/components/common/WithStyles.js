import Wrapper from "./Wrapper";

export default function WithStyles({image, description, headline}) {
  return (
    <Wrapper className='flex felx-col w-full h-auto mx-auto'>
        <img src={image} alt='first' className="w-full " width={500} height={500} style={{ objectFit:"cover"}} />
        <h1> {description} </h1>
        <h4> {headline} </h4>
    </Wrapper>
  )
}