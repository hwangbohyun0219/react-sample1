import React, { useReducer } from 'react';

const reducer = (state, action) => {
  if(action.type === "up") {
    return state = state + 1;
  }else if(action.type === " DOWN"){
    return state = state - 1;
  }else {
    return state;
  }
}

function App(props) {
  const [number, dispatch] = useReducer(reducer, 10);
  return (
    <div>
    <button onClick={() =>{
      dispatch({type : "UP"})
    }}>증가</button>
    <button onClick={() =>{
      dispatch({type : "DOWN"})
    }}>감소</button>
    </div>
  );
}

export default App;