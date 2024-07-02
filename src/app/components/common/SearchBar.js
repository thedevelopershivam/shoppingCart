import { IoSearchOutline } from "react-icons/io5";


function SearchBar() {
  return (
    <label className='flex gap-0 min-w-full md:min-w-[350px] w-full'>
        <section className="w-9 h-9 flex justify-center items-center bg-bgWhites rounded-l">
            <IoSearchOutline />
        </section>
        <section className="w-full">
              <input type="search" className="w-full focus:outline-none h-9 rounded-r pr-1.5" />
        </section>
    </label>
  )
}

export default SearchBar