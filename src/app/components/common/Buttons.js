import React from 'react'

export function Button({ children, className, onClick }) {
  return (
    <span>
    <button type="button" className={`centerMe px-6 py-2  rounded shadow-md font-semibold border-[1px] hover:bg-transparent hover:shadow-none  hover:font-mediumn duration-300 ${className}`} onClick={onClick}>
        {children}
    </button>
    </span>
  )
}
