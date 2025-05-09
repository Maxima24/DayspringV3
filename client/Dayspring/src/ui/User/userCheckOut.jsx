import React from 'react';
import { useSelector } from 'react-redux';

const UserCheckout = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const shippingFee = 5; // Flat shipping fee
  const itemTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalAmount = itemTotal + shippingFee;

  return (
    <div className="min-h-screen bg-white text-slate-900 px-4 py-6">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">Checkout</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 mb-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-blue-50 p-4 rounded-lg shadow">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.title} className="h-16 w-16 rounded object-cover" />
                  <div>
                    <h2 className="font-semibold text-blue-800">{item.title}</h2>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <p className="text-blue-600 font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-blue-100 rounded-lg p-4 shadow-md mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Items Total</span>
              <span className="font-medium">${itemTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Shipping Fee</span>
              <span className="font-medium">${shippingFee.toFixed(2)}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-blue-800 font-bold text-lg">
              <span>Total</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment Button */}
          <button className="bg-blue-600 text-white w-full py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Make Payment Now
          </button>
        </div>
      )}
    </div>
  );
};

export default UserCheckout;
