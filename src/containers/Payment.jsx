import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PayPalButtons } from '@paypal/react-paypal-js';
import AppContext from '../context/AppContext';
// import '../styles/components/Payment.css';

const Payment = () => {

  const { state, addNewOrder, handleSumTotal } = useContext(AppContext);
  const { cart, buyer } = state;

  const navigate = useNavigate();


  // const paypalOptions = {
  //   clientId: '',
  //   intent: 'capture',
  //   currency: 'USD'
  // };

  // const buttonStyles = {
  //   style: {
  //     layout: 'vertical',
  //     color: 'blue',
  //     shape: 'rect',
  //     label: 'paypal'
  //   }
  // }

  // const handlePaymentSuccess = data => {
  //   console.log("Success...", data);
  //   if (data.status === 'COMPLETED') {
  //     const newOrder = {
  //       buyer,
  //       product: cart,
  //       payment: data
  //     }

  //     addNewOrder(newOrder);
  //     navigate('/checkout/success');
  //   }
  // };

  const handleApprove = (orderID) => {
    const newOrder = {
      buyer,
      product: cart,
      payment: orderID
    };

    addNewOrder(newOrder);
    navigate('/checkout/success');
  }

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 pt-4 pb-16 sm:px-6 sm:pt-8 sm:pb-24 lg:px-8 xl:px-2 xl:pt-14">
        <h1 className="sr-only">Checkout</h1>

        <div className="mx-auto grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="sr-only">Order summary</h2>

            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cart.map((product) => (
                  <li key={product.id} className="flex space-x-6 py-6">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
                    />
                    <div className="flex-auto">
                      <div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
                        <div className="flex-auto space-y-1 text-sm font-medium">
                          <h3 className="text-gray-900">
                            <a href="#">{product.title}</a>
                          </h3>
                          <p className="text-gray-900">$ {product.price}</p>
                          <p className="hidden text-gray-500 sm:block">{product.description}</p>
                        </div>
                        <div className="flex flex-none space-x-4">
                          <div className="flex border-l border-gray-300 pl-4">
                            <button type="button" className="text-sm font-medium text-red-700 hover:text-red-800">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd className="text-gray-900">{`$ ${handleSumTotal()}`}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Taxes</dt>
                <dd className="text-gray-900">$0</dd>
              </div>
              <div className="flex justify-between">
                <dt>Shipping</dt>
                <dd className="text-gray-900">$0</dd>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-6 text-gray-900">
                <dt className="text-base">Total</dt>
                <dd className="text-base">{`$ ${handleSumTotal()}`}</dd>
              </div>
            </dl>
          </div>

          <div className="mx-auto w-full max-w-lg">
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: handleSumTotal(),
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  handleApprove(data.orderID)
                });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;