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
  const style = {color : 'white', backgroundColor : 'blue'};
  return (
    <div style={style}>
      <div>{number}</div>
      <button onClick={() => {

      }}>
        
      </button>      
    </div>
  );
}

export default App;