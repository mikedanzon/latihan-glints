const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  number: 0,
  age: 25,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLUS_NUMBER':
      return {
        ...state,
        number: state.number + 1,
      };
    case 'CHANGE_AGE':
      return {
        ...state,
        age: action.newAge,
      };
    default:
      return state;
  }
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Action
store.dispatch({ type: 'PLUS_NUMBER' });
console.log(store.getState());
