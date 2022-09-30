import { useState, useCallback } from 'react';
import initialState from '../initialState';


const useInitialState = () => {
    const [state, setState] = useState(initialState);


    const addToCart = payload => {

        let result = state.cart.find(product => product.id === payload.id);

        let cart = [];

        if (result) {
            result.quantity = result.quantity + 1;
            result.price = result.price * result.quantity;
            cart = [...state.cart]
        } else {
            cart = [...state.cart, { ...payload }]
        }

        setState({
            ...state,
            cart
        });
    };

    const removeFromCart = payload => {
        setState({
            ...state,
            cart: state.cart.filter(item => item.id !== payload.id)
        })
    };

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: payload
        })
    };

    const addNewOrder = payload => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        })
    };

    const handleSumTotal = useCallback(() => {

        const reducer = (acum, currentValue) => acum + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);

        return sum;
    }, [state.cart]);

    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
        handleSumTotal,
        state
    };
};

export default useInitialState;