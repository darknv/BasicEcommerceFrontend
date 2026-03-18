import { useEffect, useState } from 'react'
import { CartContext } from './useCart';


const CartProvider = ({children}) => {

const [cart, setCart] = useState(()=>{
  const savedCart = localStorage.getItem('myCart');
  return savedCart ? JSON.parse(savedCart) : [];
});

useEffect(()=>{
  localStorage.setItem('myCart',JSON.stringify(cart));
},[cart]);

  return (
    <CartContext.Provider value={{cart,setCart}}>
{children}
    </CartContext.Provider>
  )
}

export default CartProvider