import './index.css';
// 1. dont forget input useReducer from react
import React, { useReducer } from 'react';
//2. create the reducer with state and action, and addi the switch statement
const reduceCustom = (state, action) => {
  return state + action;
}
//3. logic of the switch statement is if the case on light true, if the case off light is false then return back to state
const RoomBefore=()=> {
  //4. declare the useReducer variable (light and dispatch)
  const [sum, dispatch] = useReducer(reduceCustom, 0)

  const switchState = (num) => {
    switch (num) {
      case 0:
        // on
        document.querySelector(".room.lit").classList.remove("unlit")
        dispatch(0)
        break;
      case 1:
        // off
        document.querySelector(".room.lit").classList.add("unlit")
        dispatch(1)
        break;
      default:
        break;
    }
  }

  return (
    //5. Perhaps you can see the className from the css which one should be call when the case on or off
    <div className="room lit">
      <h1>Room</h1>
      {/* 6. Dispatch the case when the button clicked */}
      <button onClick={() => switchState(0)}>ON</button>
      <button onClick={() => switchState(1)}>OFF</button>
    </div>
  );
}

export default RoomBefore;