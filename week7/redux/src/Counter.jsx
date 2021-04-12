import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {
    return (
        <>
            <input type="text" value={props.order} readOnly />
            <button onClick={props.counterminusFunction}>-</button>
            <button onClick={props.counterPlusFunction}>+</button>
        </>
    );
};

const stateToProps = (globalState) => {
    return {
        order: globalState.order,
    };
};

const dispatchToProps = (dispatch) => {
    return {
        counterPlusFunction: () => dispatch({ type: 'PLUS_ORDER' }),
        counterminusFunction: () => dispatch({ type: 'MINUS_ORDER' }),
    };
};

export default connect(stateToProps, dispatchToProps)(Counter);
