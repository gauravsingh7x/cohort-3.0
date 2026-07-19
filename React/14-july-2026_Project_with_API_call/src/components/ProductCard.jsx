import React, { useContext } from 'react'
import { MyStore } from "../context/MyContext";


const ProductCard = ({product, isInCart}) => {

    const {setCartItems, increaseQuantity, decreaseQuantity} = useContext(MyStore);

    const addToCart = () => {                   //add quantity in cartItems
        setCartItems((prev)=>[...prev, { ...product, quantity: 1 }]);
        // setCartItems((prev)=>[...prev, product]);
        alert(`${product.title.slice(0, 25)}... added into MyCart`);
    } 

  return (
    <div className="group max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="flex h-64 items-center justify-center overflow-hidden bg-gray-100 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="space-y-3 p-5">
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium capitalize text-blue-700">
          {product.category}
        </span>

        <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        <p className="line-clamp-2 text-sm text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            <span className="font-medium">{product.rating.rate}</span>
            <span className="text-sm text-gray-500">
              ({product.rating.count} reviews)
            </span>
          </div>

          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
        </div>

        {/* Button */}
{
  isInCart ? <button className="w-full p-1 bg-gray-500 flex items-center justify-evenly gap-4 rounded">
            <span 
            onClick={()=>decreaseQuantity(product.id)}
            className="text-2xl">-</span>
            
            <span className="text-2xl">{isInCart.quantity}</span>
            
            <span 
            onClick={() => increaseQuantity(product.id)}
              // console.log("Product ID:", product.id);
            className="text-2xl">+</span>
          </button>
            :
          <button 
            onClick={addToCart}
            className="w-full rounded-lg bg-black py-3 font-medium text-white transition hover:bg-gray-800">
          Add to Cart
        </button>
}
      </div>
    </div>
  );
}

export default ProductCard