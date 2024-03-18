import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
  return (
    <form className=' flex relative items-center justify-center h-10'>
        <input
         type="text"
         placeholder=' search location..'
         className=' px-4 py-2 w-[230px] border border-gray-50 rounded-l-md focus:outline-none focus:border-blue-500 h-full' />
        <button className=' px-4 py-[9px] bg-blue-500 text-white- rounded-r-md focus:outline-none hover:bg-blue-400 whitespace-nowrap h-full '>
        <IoSearch />
        </button>
    </form>
  )
}

export default SearchBox