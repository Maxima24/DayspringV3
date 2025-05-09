import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseQuantity, decreaseQuantity } from '../../feautures/cartSlice';
import { GetProduct } from '../../services/apiAuth';

const GuestPage = () => {
  const [products, setProducts] = useState([]);
  const [addedToCartIds, setAddedToCartIds] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector(state => state.user);
  const cart = useSelector(state => state.cart.cart);

  const username = state.username;
  const role = state.role;
  const Guestrole = role === "GUEST";

  useEffect(() => {
    async function getProduct() {
      const product = await GetProduct();
      const productItem = product.map((item) => ({ ...item }));
      setProducts(productItem);
    }
    getProduct();
  }, []);

  // if (!Guestrole) return <Navigate to={"/newuser/login"} />;

  const user = { name: username };

  const featuredItems = [
    { id: 1, title: "MTH 102", price: "$5", image: "https://wwxciglnsyixgfdyxagg.supabase.co/storage/v1/object/sign/dayspring-images/MTH%20106.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0OWRkZDRjLTVkNDEtNDc2Zi1iNmEyLTE0Mzc1MmE1YzExZCJ9.eyJ1cmwiOiJkYXlzcHJpbmctaW1hZ2VzL01USCAxMDYuanBnIiwiaWF0IjoxNzQ2NjEyOTUyLCJleHAiOjE3NzgxNDg5NTJ9.ZKVizDoBxHe3v_-ZPPQ3UoTEPOa6tstACmHoigKmzMs" },
    { id: 2, title: "PHY 102", price: "$10", image: 
      "https://wwxciglnsyixgfdyxagg.supabase.co/storage/v1/object/sign/dayspring-images/PHY%20102.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM0OWRkZDRjLTVkNDEtNDc2Zi1iNmEyLTE0Mzc1MmE1YzExZCJ9.eyJ1cmwiOiJkYXlzcHJpbmctaW1hZ2VzL1BIWSAxMDIuanBnIiwiaWF0IjoxNzQ2NjEzNTM1LCJleHAiOjE3NzgxNDk1MzV9.mdmmh0Zo1dE5KufUsahJ1KmwZxFDGSbKjfiYmkY2bRs" },
  ];

  const categories = [
    { name: "Past Questions", image: "/images/electronics.jpg" },
    
    { name: "Skill Aquisition", image: "/images/home.jpg" }
  ];

  function addInCart(id) {
    const selectedProduct = products.find(item => item.id === id);
    dispatch(addToCart(selectedProduct));
    setAddedToCartIds(prev => [...prev, id]);
  }

  function increaseQuantitys(id) {
    dispatch(increaseQuantity(id));
  }

  function decreaseQuantitys(id) {
    dispatch(decreaseQuantity(id));
  }

  return (
    <div className="bg-white min-h-screen text-slate-900">
      <header className="px-4 py-6 text-center">
        <h1 className="text-3xl font-bold text-blue-600">Dayspring Tutors</h1>
        <p className="text-gray-600">Welcome back, {user.name}! 👋</p>
      </header>

      {/* Hero Banner (Static) */}
      <section className="px-4 mb-10">
        <div className="grid md:grid-cols-2 gap-4">
          {featuredItems.map(item => (
            <div key={item.id} className="relative h-64 rounded-lg overflow-hidden shadow">
              <img src={item.image} alt={item.title} className="w-full h-full object-fill" />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-6">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 mb-12">
        <h2 className="text-xl font-bold mb-4 text-center text-blue-600">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-blue-50 text-blue-800 rounded-lg shadow p-4 text-center hover:shadow-md transition">
              <img src={cat.image} alt={cat.name} className="h-24 w-full object-cover rounded mb-2" />
              <button className="hover:text-blue-600 font-semibold">{cat.name}</button>
            </div>
          ))}
        </div>
      </section>

      {/* All Products */}
      <section className="px-4 pb-12">
        <h2 className="text-xl font-bold mb-4 text-center text-blue-600">All Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const cartItem = cart.find(item => item.id === product.id);
            const quantity = cartItem ? cartItem.quantity : 0;
            const isInCart = addedToCartIds.includes(product.id);

            return (
              <div key={product.id} className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-md transition text-center">
                <img src={product.image} alt={product.title} className="h-40 w-full object-cover rounded mb-2" />
                <h3 className="font-semibold text-blue-800">{product.title}</h3>
                <p className="text-sm text-blue-600 mb-2">{product.price}</p>

                {isInCart && (
                  <div className="flex justify-center items-center gap-2 mb-2">
                    <button onClick={() => decreaseQuantitys(product.id)} className="px-2 py-1 bg-blue-100 rounded hover:bg-blue-200">-</button>
                    <span>{quantity}</span>
                    <button onClick={() => increaseQuantitys(product.id)} className="px-2 py-1 bg-blue-100 rounded hover:bg-blue-200">+</button>
                  </div>
                )}

                {!isInCart ? (
                  <button className="mt-1 bg-blue-600 text-white px-4 py-1 rounded w-full hover:bg-blue-700" onClick={() => addInCart(product.id)}>
                    Add to Cart
                  </button>
                ) : (
                  <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded w-full hover:bg-blue-600" onClick={() => navigate(`/cart/${role}/${username}`)}>
                    Go to Cart
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default GuestPage;
