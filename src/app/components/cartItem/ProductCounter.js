"use client"
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


function CounterButton({ children, clickHandler, className })
{
    return <button type='button' className={`btn-sm border-[1px] border-gray-300 rounded ${className}`} onClick={clickHandler}>
        {children}
    </button>
}

function ProductCounter({ inputClass, buttonClass, maxLen = 10 }) {
  const [counter, setCounter] =useState(6);
  return (
    <div className='flex gap-1.5 justify-center items-center'>
        
          <CounterButton className={buttonClass} clickHandler={()=>setCounter(Number(counter) > 1  ? counter - 1: counter)}>
            <MdKeyboardArrowLeft/>
          </CounterButton>

            <input
              type={'number'}
              className={`max-w-[40px] focus:outline-none ${inputClass}`} value={counter}
              min={1}
              onChange={(e) => setCounter(e.target.value)} 
            />

      <CounterButton className={buttonClass} clickHandler={() => setCounter(Number(counter) < maxLen ? counter + 1 : counter)}>
            <MdKeyboardArrowRight/>
          </CounterButton>

    </div>
  )
}

export default ProductCounter