function LabelInput({ label, type, onChange, attr, value, placeholder }) {

    return (
        <label className='flex flex-col'>
            <span className="capitalize text-gray-600"> {label} </span>
            <input type={type}
                className="px-2 py-1 border-[1px] border-gray-200 rounded focus:outline-none h-[37px]" placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                { ...attr }
            />
        </label>
    )
}

export default LabelInput