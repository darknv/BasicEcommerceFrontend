import React, { useContext } from "react";
import { CartContext } from '../context/useCart';
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);

  const totalAmount = cart.reduce((acc, item) => {
    const priceAsNumber = parseInt(item.price.replace(/\D/g, ""));
    return acc + priceAsNumber;
  }, 0);

  // Challenge: Logic to remove an item from this page too!
  const removeItem = (elem) => {
    setCart(cart.filter((item) => item.id !== elem.id));
    toast.error(`${elem.name} is removed`);
  };

  const clearCart = () => {
    setCart([]);
    toast.success(`Cart Cleared!`)
  };

  return (
    <div className="p-10">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-5">Your Shopping Cart</h1>
        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-6 py-2 rounded mt-4"
          >
            Clear Cart
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-xl">Your cart is feeling light... 🛒</p>
          <Link to="/product" className="text-blue-500 underline">
            Go add some items!
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {/* Map your cart items here */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p>{item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeItem(item)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Price Section */}
          <div className="mt-10 text-right">
            <h2 className="text-2xl font-bold">Total: {totalAmount}</h2>
            <button className="bg-green-500 text-white px-6 py-2 rounded mt-4">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
