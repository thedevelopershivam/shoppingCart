function MinMaxValue({onChange, min = 0, max, value = 0}) {
  return (
      <input
          type="number"
          className='px-2 border-[1px] border-gray-200 rounded focus:outline-none hideSpinner w-full max-w-[110px] py-0.5'
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(e.target.value)}
      />
  )
}

export default MinMaxValue