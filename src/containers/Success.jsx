import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';


const Success = () => {
  const { state, handleSumTotal } = useContext(AppContext);
  const { cart, buyer, gMapsApiKey } = state;

  const location = useGoogleAddress(gMapsApiKey, buyer);

  return (
    // <div className="Succes">
    //   <div className="Success-content">
    //     <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
    //     <span>Tu pedido llegará en 3 dias a tu dirección:</span>
    //     <div className="Success-map">
    //       <Map data={location} gMapsApiKey={gMapsApiKey} />
    //     </div>
    //   </div>
    // </div>

    <main className="bg-white px-4 pt-16 pb-24 sm:px-6 sm:pt-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="max-w-xl">
          <h1 className="text-base font-medium text-red-700">Thank you!</h1>
          <p className="mt-2 text-4xl font-bold tracking-tight">It's on the way!</p>
          <p className="mt-2 text-base text-gray-500">Your order #1 has shipped and will be with you soon.</p>

          <dl className="mt-12 text-sm font-medium">
            <dt className="text-gray-900">Tracking number</dt>
            <dd className="mt-2 text-red-700">51547878755545848512</dd>
          </dl>
        </div>

        <section aria-labelledby="order-heading" className="mt-10 border-t border-gray-200">
          <h2 id="order-heading" className="sr-only">
            Your order
          </h2>

          <h3 className="sr-only">Items</h3>
          {cart.map((product) => (
            <div key={product.id} className="flex space-x-6 border-b border-gray-200 py-10">
              <img
                src={product.image}
                alt={product.title}
                className="h-20 w-20 flex-none rounded-lg bg-gray-100 object-cover object-center sm:h-40 sm:w-40"
              />
              <div className="flex flex-auto flex-col">
                <div>
                  <h4 className="font-medium text-gray-900">
                    <a href="#">{product.title}</a>
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">{product.description}</p>
                </div>
                <div className="mt-6 flex flex-1 items-end">
                  <dl className="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6">
                    <div className="flex">
                      <dt className="font-medium text-gray-900">Quantity</dt>
                      <dd className="ml-2 text-gray-700">1</dd>
                    </div>
                    <div className="flex pl-4 sm:pl-6">
                      <dt className="font-medium text-gray-900">Price</dt>
                      <dd className="ml-2 text-gray-700">$ {product.price}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          ))}

          <div className="sm:ml-40 sm:pl-6">
            <h3 className="sr-only">Your information</h3>

            <h4 className="sr-only">Addresses</h4>
            <dl className="grid grid-cols-2 gap-x-6 py-10 text-sm">
              <div>
                <dt className="font-medium text-gray-900">Shipping address</dt>
                <dd className="mt-2 text-gray-700">
                  <address className="not-italic">
                    <span className="block">{buyer.firstName} {buyer.lastName}</span>
                    <span className="block">{buyer.postalCode} {buyer.city}</span>
                    <span className="block">{buyer.address}</span>
                  </address>
                </dd>
              </div>
              <div className="Success-map">
                <Map data={location} gMapsApiKey={gMapsApiKey} />
              </div>
            </dl>

            <h4 className="sr-only">Payment</h4>
            <dl className="grid grid-cols-2 gap-x-6 border-t border-gray-200 py-10 text-sm">
              <div>
                <dt className="font-medium text-gray-900">Payment method</dt>
                <dd className="mt-2 text-gray-700">
                  <p>Paypal</p>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Shipping method</dt>
                <dd className="mt-2 text-gray-700">
                  <p>DHL</p>
                  <p>Takes up to 4-6 working days</p>
                </dd>
              </div>
            </dl>

            <h3 className="sr-only">Summary</h3>

            <dl className="space-y-6 border-t border-gray-200 pt-10 text-sm">
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Subtotal</dt>
                <dd className="text-gray-700">{`$ ${handleSumTotal()}`}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="flex font-medium text-gray-900">
                  Discount
                </dt>
                <dd className="text-gray-700">-$0 (0%)</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Shipping</dt>
                <dd className="text-gray-700">$0</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Total</dt>
                <dd className="text-gray-900">{`$ ${handleSumTotal()}`}</dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Success;