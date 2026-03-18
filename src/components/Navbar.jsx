import React, { useContext } from 'react'
import { ShoppingCart } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';


const Navbar = () => {

  const {cart} = useContext(CartContext);

  return (
    <div className='bg-gray-500 sticky top-0 shadow-md flex justify-between p-6 text-2xl font-bold'>
      <div>
        Logo
      </div>
      <div className='flex gap-5 justify-center items-center mr-10'>
        <Link to='/' className="hover:text-white" >Home</Link>
        <Link to='/product' className="hover:text-white">Product</Link>
        <Link to='/about' className="hover:text-white">About</Link>
        <div className='hover:text-white p-2 rounded full '>
          <Link to='/cart' className='flex justify-center items-center gap-1'>
          <ShoppingCart size={35} strokeWidth={2.5} />
          <h2 className='rounded-full p-2 '>{cart.length}</h2>
          </Link>
          
        </div>
         
        
       

      </div>
    
    </div>
  )
}

export default Navbar