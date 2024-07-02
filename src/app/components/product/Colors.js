const Pallet = ({color}) => {
    return <div className={`w-6 h-6 rounded-full border-[1px] border-gray-300 cursor-pointer duration-300 hover:scale-[1.05]`} style={{ background: color }}></div>
}

function Colors({options=['#000', 'red']}) {
  return (
    <div className="flex items-center felx-wrap gap-3">
        <span className="text-green-700 font-semibold" >
          Colors:
        </span> 
        <div className="flex gap-1.5">
            {
              options.map((item, index) => <Pallet color={item} key={index} /> )
            }
        </div>
    </div>
  )
}

export default Colors