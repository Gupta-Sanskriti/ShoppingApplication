import React from 'react'
import {FiChevronDown} from "react-icons/fi"

const Header = () => {
  return (
    <div className='bg-blue-600 p-3 flex justify-center'>
        <div className="mx-5">
        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart logo" className='h-5' />
        <p className='italic text-white text-sm'>Explore <span className='text-yellow-400 font-semibold'>Plus</span></p>
        </div>
        <div className="shadow-lg">
            <input type="text" className='h-10 w-[19rem] p-2 rounded-l-sm' placeholder='Search for products, brands and more' />
            <button className='text-blue-600 bg-white p-2 rounded-r-sm '>Search</button>
        </div>
        <div className="mx-5 self-center">
            <button className='bg-white text-blue-600 h-9 px-10 font-semibold rounded-sm shadow-lg'>Login</button>
        </div>
        <div className="flex self-center ">
            <h1 className='font-semibold text-white mx-5'>Become a Seller</h1>
            <button className='flex font-semibold text-white mx-5'>More <FiChevronDown className='self-center'/></button>
        </div>

    </div>
  )
}

export default Header