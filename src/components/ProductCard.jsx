import React, { useContext } from 'react'
import { CartContext } from '../context/useCart';
import { Filter } from 'lucide-react';
import toast from 'react-hot-toast';


const ProductCard = ({item}) => {

const {cart, setCart} = useContext(CartContext);

const removeFromCart = ()=>{
  const updatedCart = cart.filter((elem)=>{return(elem.id !== item.id)})
  setCart(updatedCart)
}

const handleAddToCart = ()=>{
  setCart((prevCart) => {
    const foundData = prevCart.find((elem)=> elem.id === item.id);
    if(foundData){
      return prevCart.map((elem)=>
        elem.id === item.id
        ?{...elem,quantity:elem.quantity+1}
        :elem
  );
    }
    return [...prevCart , {...item,quantity:1}];
  });
  toast.success(`${item.name} added to the cart!`,{
    style:{
      borderRadius:'10px',
      background:'#333',
      color:'#fff',
    },
});
 
}

  return (
    <>
     <div className="bg-white text-black p-4 shadow-lg hover:scale-105 transition-transform rounded-lg border border-gray-200">
       <img src={item.image} className='w-full h-48 object-cover' />
                    <h2 className="font-bold text-xl mt-2"> {item.name} </h2>
                    <p className="text-gray-600"> {item.price} </p>
                    <div className='flex gap-2'>
                      <button onClick={handleAddToCart} className='bg-blue-500 text-white text-sm px-2 py-2 rounded mt-2 active:scale-90'>Add to Cart</button>
                     <button onClick={removeFromCart} className='bg-blue-500 text-white text-sm px-2 py-2 rounded active:scale-90 mt-2'>Remove from Cart</button>
                    </div>
                     
                 
    </div>

    </>
   
  )
}


export default ProductCard