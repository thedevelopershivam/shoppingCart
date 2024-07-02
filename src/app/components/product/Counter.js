"use client"
import { useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";


const ArrowButton = ({children, onClick}) =>{
    return <span className="px-1 cursor-pointer hover:bg-bgPrimary hover:text-textWhites max-w-[25px] centerMe" onClick={onClick}>
        {children}
    </span>
}

function Counter({ maxItems = 10, inputClass }) {
    const [count, setCount] = useState(1);
  return ( 
        <label className="flex gap-2 border max-w-[100px] p-1 rounded-md">
      <input type="number" className={`w-full px-2 hideSpinner focus:outline-none ${inputClass}`} min="1"  value={count} onChange={(e)=> setCount(e.target.value)}/>
            <div className='flex flex-col gap-0.5'>
                <ArrowButton>
                    <MdOutlineKeyboardArrowUp
                        value={count}
                      onClick={() => setCount(count >= maxItems ? count : count  + 1)}
                    />
                </ArrowButton>
                <ArrowButton>
                  <MdOutlineKeyboardArrowDown
                    value={count}
                    onClick={() => setCount(count < 2 ? count : count  - 1)} 
                  />
                </ArrowButton>
            </div>
        </label>
  )
}

export default Counter