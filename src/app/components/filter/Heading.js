function Heading({children}) {
  return (
      <h3 className='text-xl font-semibold text-textPrimary py-1 border-b border-b-gray-300'>
          {children}
      </h3>
  )
}

export default Heading