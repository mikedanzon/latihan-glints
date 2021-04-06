import React, {useReducer} from 'react'

//state management redux
//state, action, dispatch
const coba = (state, action) => {
  return state + action;
}

export function CounterUseReducer(){
  const [sum, dispatch] = useReducer(coba, 0)
  console.log(sum)

  //default structur of useReducer
  // const [state, dispatch] = useReducer(reducer, 0, init)

  return(
    <>
      {sum}
      <button onClick={() => dispatch(2)}>
        Add
      </button>
    </>
  )
}