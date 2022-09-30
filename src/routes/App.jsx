import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import ProductDetail from '../components/ProductDetail';

import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const App = () => {

    const initialState = useInitialState();

    return (
        <PayPalScriptProvider options={{ "client-id": "AUnGIyVNheq6Wm2oh0Hn6z7T9AJudRfRdNHxhpSJHjXaFl0AshqEyfHYYrXRGpeMf9nmh6SAmL_kO7cZ" }}>
            <AppContext.Provider value={initialState}>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route exact path="/product/:productId" element={<ProductDetail />} />
                            <Route exact path="/checkout" element={<Checkout />} />
                            <Route exact path="/checkout/information" element={<Information />} />
                            <Route exact path="/checkout/payment" element={<Payment />} />
                            <Route exact path="/checkout/success" element={<Success />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AppContext.Provider>
        </PayPalScriptProvider>
    );
}

export default App;