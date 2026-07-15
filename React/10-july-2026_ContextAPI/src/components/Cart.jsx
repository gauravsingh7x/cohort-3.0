import React, { useContext } from "react";
import { ShoppingCart, Trash2, Star } from "lucide-react";
import { MyShop } from "../context/MyWebContext";

// const Cart = ({ cartItems }) => {
const Cart = () => {
    
  const {cartItems} = useContext(MyShop);


  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex items-center gap-3 mb-8">
          <ShoppingCart size={35} />
          <h1 className="text-3xl font-bold">
            Shopping Cart ({cartItems.length})
          </h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-10 text-center">
            <h2 className="text-2xl font-semibold text-gray-700">
              Your cart is empty 🛒
            </h2>
            <p className="text-gray-500 mt-2">
              Add some products to your cart.
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md p-4 flex items-center gap-5"
                >
                  {/* Image */}
                  <div className="w-28 h-28 bg-gray-100 rounded-lg flex items-center justify-center p-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h2 className="font-semibold text-lg line-clamp-2">
                      {item.title}
                    </h2>

                    <p className="text-sm text-gray-500 mt-1 capitalize">
                      {item.category}
                    </p>

                    <div className="flex items-center gap-1 mt-2">
                      <Star
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <span>{item.rating.rate}</span>
                      <span className="text-gray-500">
                        ({item.rating.count})
                      </span>
                    </div>

                    <p className="text-2xl font-bold text-green-600 mt-3">
                      ${item.price}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button className="text-red-500 hover:bg-red-100 p-3 rounded-full transition">
                    <Trash2 size={22} />
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-5">
              <h2 className="text-2xl font-bold mb-5">
                Order Summary
              </h2>

              <div className="flex justify-between mb-3">
                <span>Total Items</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="flex justify-between mb-5">
                <span>Total Price</span>
                <span className="font-bold text-xl text-green-600">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;