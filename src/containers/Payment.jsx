import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PayPalButtons } from '@paypal/react-paypal-js';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = () => {

  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const navigate = useNavigate();


  // const paypalOptions = {
  //   clientId: 'sf29zsrz2nh7rqv7$c84abf433d1ee30213d24ae2924b21de',
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

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

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
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map(item => (
          <div key={item.id} className="Payment-item">
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
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
          {/* <PayPalButton options={paypalOptions}
            style={buttonStyles}
            amount={handleSumTotal()}
            onSuccess={data => console.log('Success..', data)}
            onApprove={data => handlePaymentSuccess(data)}
            onError={error => console.log('Error', error)}
            /> */}

        </div>
      </div>
    </div>
  );
};

export default Payment;