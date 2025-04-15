import React, { useReducer } from "react";

function reducer(state, action) {
   switch (action.type) {
    case 'increment':
        return {count: +state.count + 1}
    case 'decrement':
        return {count: +state.count - 1}
    default:
        throw new Error();
   }
}

function RedCounter() {
    let [state, setState] = useReducer(reducer, 0);
    return (
        <>
        Клики: {state.count}
        <button onClick={()=>setState({type: 'increment'})}>+</button>
        <button onClick={()=>setState({type: 'decrement'})}>-</button>
        </>
    )
}

export default RedCounter;