import React, { useContext } from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';

const Products = () => {

  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">Products</h2>
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-4">
          {products.map(product => (
            <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products;