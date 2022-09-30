import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, handleAddToCart }) => {
    return (
        <div>
            <Link to={`/product/${product.id}`}>
            <div className="relative">
                
                    <div className="relative h-72 w-full overflow-hidden rounded-lg">

                        <img
                            src={product.featuredImage.src}
                            alt={product.title}
                            className="h-full w-full object-cover object-center"
                        />

                    </div>
                
                <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">{product.title}</h3>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">$ {product.price}</p>
                </div>
            </div>
            {/* <div className="mt-6">
                <button  className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200 w-full" type='button' onClick={() => handleAddToCart(product)}>Add to cart</button>
            </div> */}
            </Link>
        </div>
    )
}

export default Product;