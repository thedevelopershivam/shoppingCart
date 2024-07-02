import React from 'react'

function SelectDropdown({className, onChangeHandler}) {
  return (
      <select className={`w-auto text-textWhites rounded pt-1 pb-1.5 border-[1px] border-gray-200 focus:outline-none bg-bgPrimary px-2 ${className}`}
      onChange={(e)=> onChangeHandler(e.target.value)}>
          <option> Filter </option>
          <option value={JSON.stringify({item: 'order', value:'high-to-low'})}> 
            High to low 
          </option>
          <option value={JSON.stringify({item: 'order', value:"low-to-high"})}> 
            Low to high
          </option>
      </select>
  )
}

export default SelectDropdown