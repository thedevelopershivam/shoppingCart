import Wrapper from '../Wrapper'
import CollectionCard from './CollectionCard'

function Collections() {
  return (
    <Wrapper className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-5 px-[5vw]'>
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
    </Wrapper>
  )
}

export default Collections