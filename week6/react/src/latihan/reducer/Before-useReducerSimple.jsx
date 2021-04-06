import './index.css';
// 1. dont forget input useReducer from react
import React, { useReducer } from 'react';
//2. create the reducer with state and action, and addi the switch statement
const reducer = (state, action) => {
  switch(action) {
    case 'on':
      return true;
    case 'off':
      return false;
    default:
      return state;
  }
}
//3. logic of the switch statement is if the case on light true, if the case off light is false then return back to state

function RoomBefore() {
  //4. declare the useReducer variable (light and dispatch)
  const [light, dispatch] = useReducer(reducer, false)

  return (
    //5. Perhaps you can see the className from the css which one should be call when the case on or off
    <div className={`room ${light ? 'lit' : 'unlit'}`}>
      <h1>Room</h1>
      {/* 6. Dispatch the case when the button clicked */}
      <button onClick={() => dispatch('on')}>ON</button>
      <button onClick={() => dispatch('off')}>OFF</button>
    </div>
  );
}

export default RoomBefore;