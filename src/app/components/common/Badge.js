import React from 'react'

function Badge({title}) {
  return (
    <div className="w-auto flex">
      <span className="bg-bgPrimary text-textWhites py-[3px] px-2 rounded-md font-semibold text-sm shadow line-clamp-1 w-auto first-letter:uppercase">
            {title}
        </span>
    </div>
  )
}

export default Badge