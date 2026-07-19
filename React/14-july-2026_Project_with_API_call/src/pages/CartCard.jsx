import React, { useContext } from 'react'
import { Trash2, Minus, Plus } from "lucide-react";
import { MyStore } from "../context/MyContext";


const CartCard = ({product}) => {

  let {cartItems, increaseQuantity, decreaseQuantity} = useContext(MyStore);

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-lg transition-all">
      {/* Product Image */}
      <div className="flex h-32 w-32 items-center justify-center rounded-xl bg-gray-100 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 space-y-2">
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium capitalize text-blue-700">
          {product.category}
        </span>

        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-2">
          <span className="text-yellow-500">⭐</span>
          <span>{product.rating.rate}</span>
          <span className="text-gray-500">
            ({product.rating.count} Reviews)
          </span>
        </div>
      </div>

      {/* Price + Quantity + Remove */}
      <div className="flex flex-col items-center gap-4 md:items-end">
        <h3 className="text-2xl font-bold text-green-600">
          ${product.price}
        </h3>

        {/* Quantity */}
        <div className="flex items-center rounded-lg border">
          <button 
          onClick={()=>decreaseQuantity(product.id)}
          className="p-2 hover:bg-gray-100">
            <Minus size={18} />
          </button>

          <span className="w-10 text-center font-medium">{product.quantity}</span>

          <button 
          onClick={()=>increaseQuantity(product.id)}
          className="p-2 hover:bg-gray-100">
            <Plus size={18} />
          </button>
        </div>

        {/* Remove */}
        <button className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600">
          <Trash2 size={18} />
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartCard