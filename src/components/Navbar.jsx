import React, { useContext } from 'react';
import { ShoppingCart } from 'lucide-react';
import { CartContext } from '../context/useCart';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    // Changed to a darker, professional slate and added items-center
    <nav className='bg-slate-800 sticky top-0 z-50 shadow-lg text-white'>
      <div className='max-w-7xl mx-auto flex justify-between items-center p-5'>
        
        {/* Logo Section */}
        <div className='text-3xl font-extrabold tracking-tight cursor-pointer'>
          <Link to='/'>STORE<span className='text-blue-400'>.</span></Link>
        </div>

        {/* Navigation Links */}
        <div className='flex gap-8 items-center font-medium'>
          <Link 
            to='/' 
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Home
          </Link>
          <Link 
            to='/product' 
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Products
          </Link>
          <Link 
            to='/about' 
            className="hover:text-blue-400 transition-colors duration-200"
          >
            About
          </Link>

          {/* Cart Icon with Badge */}
          <Link to='/cart' className='relative group p-2 transition-transform hover:scale-110'>
            <ShoppingCart size={32} strokeWidth={2} />
            {cart.length > 0 && (
              <span className='absolute -top-1 -right-1 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm'>
                {cart.length}
              </span>
            )}
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;