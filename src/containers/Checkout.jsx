import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

import {
  CheckIcon,
  ClockIcon
} from '@heroicons/react/24/outline';


const Checkout = () => {

  const { state, removeFromCart, handleSumTotal } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = product => {
    removeFromCart(product);
  };

  

  return (
    // <div className="Checkout">
    //   <div className="Checkout-content">
    //     <h3>{cart.length > 0 ? "Lista de pedidos:": "Sin pedidos..."}</h3>
    //     {cart.map((item) => (
    //       <div key={item.id} className="Checkout-item">
    //         <div className="Checkout-element">
    //           <h4>{item.title}</h4>
    //           <span>$ {item.price}</span>
    //         </div>
    //         <button type='button' onClick={() => handleRemove(item)}>
    //           <i className="fas fa-trash-alt" title="Eliminar" />
    //         </button>
    //       </div>))}

    //   </div>
    //   {cart.length > 0 && (
    //     <div className="Checkout-sidebar">
    //       <h3>{`Precio Total $ ${handleSumTotal()}`}</h3>
    //       <Link to="/checkout/information">
    //         <button type='button'>Continuar pedido</button>
    //       </Link>
    //     </div>)}
    // </div>

    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
        <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>

        <form className="mt-12">
          <section aria-labelledby="cart-heading">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
              {cart.map((product) => (
                <li key={product.id} className="flex py-6">
                  <div className="flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-sm">
                          <a href="#" className="font-medium text-gray-700 hover:text-gray-800">
                            {product.title}
                          </a>
                        </h4>
                        <p className="ml-4 text-sm font-medium text-gray-900">$ {product.price}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{product.description}</p>

                    </div>

                    <div className="mt-4 flex flex-1 items-end justify-between">
                      <p className="flex items-center space-x-2 text-sm text-gray-700">
                        {product.inStock ? (
                          <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                        ) : (
                          <ClockIcon className="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
                        )}

                        <span>{product.inStock ? 'In stock' : `Will ship in ${product.leadTime}`}</span>
                      </p>
                      <div className="ml-4">
                        <button type="button" onClick={() => handleRemove(product)} className="text-sm font-medium text-red-700 hover:text-red-800">
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section aria-labelledby="summary-heading" className="mt-10">
            <h2 id="summary-heading" className="sr-only">
              Order summary
            </h2>

            <div>
              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">Subtotal</dt>
                  <dd className="ml-4 text-base font-medium text-gray-900">{`$ ${handleSumTotal()}`}</dd>
                </div>
              </dl>
              <p className="mt-1 text-sm text-gray-500">Shipping and taxes will be calculated at checkout.</p>
            </div>

            <div className="mt-10">
              <Link to="/checkout/information">
                <button
                  type="submit"
                  className="w-full rounded-md border border-transparent bg-red-700 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Checkout
                </button>
              </Link>
            </div>

            <div className="mt-6 text-center text-sm">
              <p>
                or <span>
                  <Link to="/" className="font-medium text-red-700 hover:text-red-800">
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </span>
              </p>
            </div>
          </section>
        </form>
      </div>
    </div>
  )
}

export default Checkout;