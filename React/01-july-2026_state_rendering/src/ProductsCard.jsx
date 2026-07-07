import React from "react";

// const ProductsCard = (props) => {
const ProductsCard = ({ product, del }) => {
    // console.log(props)
    // console.log(product)
    // del();
    
    return (
        <div className="p-5 border-2 rounded flex flex-col gap-4">

            <div className="w-49">
                <img src={product.image} height={'250px'} width={'250px'} alt="image" />
            </div>

            <div>
                <h2 className="font-semibold">{product.title.substring(0, 20)}</h2>
                <p className="text-md font-light">{product.category}</p>
                <p className="text-green-500">{product.price}</p>
            </div>

            <button className="bg-red-600 p-2"
            onClick={()=>{
                del(product.id);
            }}
            >
                Delete</button>

        </div>
    );
}

export default ProductsCard;