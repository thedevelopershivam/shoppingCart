function CategoryTab({ children, onClick }) {
    return (
        <button className='text-gray-500 duration-300 hover:pl-2 hover:text-textPrimary text-start capitalize' onClick={onClick}>
            {children}
        </button>
    )
}

export default CategoryTab