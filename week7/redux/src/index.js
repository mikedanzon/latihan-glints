import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// initial Global State
const globalState = {
    order: 0,
    price: 50000,
};

// create reducer
const rootReducer = (state = globalState, action) => {
    switch (action.type) {
        case 'PLUS_ORDER':
            return {
                ...state,
                order: state.order + 1,
            };

        case 'MINUS_ORDER':
            return {
                ...state,
                order: state.order - 1,
            };

        default:
            return state;
    }
};

ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
