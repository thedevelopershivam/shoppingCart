function SizeTab({children, onClick}) {
  return (
      <span className='rounded px-1.5 border-[1px] border-gray-200 duration-300 hover:bg-bgGrays hover:text-textWhites cursor-pointer ' onClick={onClick}>
          {children}
      </span>
  )
}

export default SizeTab