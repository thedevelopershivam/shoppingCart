import React from 'react'


const SizesTab = ({ children, attr, onClick }) => {
    return <button
        type="button"
        className={`border-[1px] border-gray-200 px-1.5 pb-0.5 flex-wrap cursor-pointer duration-200 hover:shadow text-gray-500 disabled:bg-gray-200 rounded disabled:pointer-events-none`}
        {...attr} onClick={onClick}>
        {children}
    </button>
}


function Sizes({ options }) {

    return (

        <div className="flex items-center felx-wrap gap-3">
            <span className="text-green-700 font-semibold" >
                Sizes:
            </span>
            <div className="flex gap-2 font-semibold">
                {
                    options.map((item, index) => {
                        console.log(item.quantity);
                        return <SizesTab
                            key={index}
                            attr={{ disabled: item?.quantity === 0 }}
                        >
                            {item.size}
                        </SizesTab>
                    }
                    )
                }
            </div>
        </div>
    )
}

export default Sizes