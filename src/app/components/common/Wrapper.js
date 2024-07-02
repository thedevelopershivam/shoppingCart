import React from 'react'

function Wrapper({children, className}) {
  return (
    <div className={`max-w-[1536px] w-full mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Wrapper