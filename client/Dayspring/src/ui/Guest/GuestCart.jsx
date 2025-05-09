import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../../feautures/cartSlice';
import { useNavigate } from 'react-router-dom';

function GuestCart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { username, role } = user;
  const cartItems = useSelector((state) => state.cart.cart);

  const removeFromCart = (id) => {
    dispatch(deleteFromCart(id));
  };

  const increaseQuantitys = (id) => {
    dispatch(increaseQuantity(id));
  };

  const decreaseQuantitys = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white min-h-screen p-4 sm:p-6">
      {/* Header */}
      <section className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate(-1)}>
          <span className="text-blue-600 text-lg hover:underline">← Back</span>
        </div>
        {cartItems.length > 0 && (
          <button
            onClick={() => dispatch(clearCart())}
            className="bprder-blue-400 text-blue px-4 py-2 rounded hover:bg-blue-500 transition"
          >
            Clear Cart
          </button>
        )}
      </section>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg p-4 bg-white flex flex-col sm:flex-row items-start sm:items-center shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-24 w-full sm:w-32 object-cover rounded mb-3 sm:mb-0"
                />
                <div className="flex-1 sm:ml-6 w-full">
                  <h3 className="text-lg font-semibold text-blue-800">{item.title}</h3>
                  <p className="text-blue-500">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="px-2 py-1 border border-blue-300 rounded text-blue-700 hover:bg-blue-50"
                      onClick={() => decreaseQuantitys(item.id)}
                    >
                      −
                    </button>
                    <span className="min-w-[24px] text-center">{item.quantity}</span>
                    <button
                      className="px-2 py-1 border border-blue-300 rounded text-blue-700 hover:bg-blue-50"
                      onClick={() => increaseQuantitys(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm text-red-500 hover:underline mt-3 sm:mt-0 sm:ml-6"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Right: Summary */}
          <div className="bg-blue-50 rounded-lg shadow p-6 h-fit text-blue-900">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between py-2 border-b border-blue-200">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-blue-200">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold text-lg py-2">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GuestCart;
