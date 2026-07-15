import { Star } from "lucide-react";
import { useContext } from "react";
import { MyShop } from "../context/MyWebContext";

// const ProductCard = ({ product, setCartItems }) => {
const ProductCard = ({product}) => {

  const {setCartItems} = useContext(MyShop);

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Product Image */}
      <div className="h-64 bg-gray-100 flex items-center justify-center p-6 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block text-xs font-semibold uppercase bg-blue-100 text-blue-700 px-3 py-1 rounded-full mb-3">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-2 line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1">
            <Star
              className="text-yellow-400 fill-yellow-400"
              size={18}
            />
            <span className="font-semibold">
              {product.rating.rate}
            </span>
            <span className="text-gray-500 text-sm">
              ({product.rating.count})
            </span>
          </div>

          <p className="text-2xl font-bold text-green-600">
            ${product.price}
          </p>
        </div>

        {/* Button */}
        <button 
        onClick={()=>{
          setCartItems(prev=>[...prev, product])
        }}
        className="w-full mt-5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;