import React, { useRef, useState } from 'react';
import './App.css';
import Result from './component1017/Result';

function App() {
  //Main, Footer 컴포넌트 생성해서 부착
  const firstNum = useRef();
  const secondNum = useRef();
  const [result, setResult] = useState({firstNum:"", secondNum:""});

  const calc = () => {
    setResult({
      firstNum : firstNum.current.value,
      secondNum : secondNum.current.value,
    });
  };


  return (
    <>
    <Result firstNum={result.firstNum} secondNum={result.secondNum}></Result>
      <div>
            <input ref={firstNum} placeholder='첫번째숫자'></input>
            <input ref={secondNum} placeholder='두번째숫자'></input>
            <input placeholder='+,-, *, /'></input>
            <button onclick={calc}>계산!</button>
        </div>
    </>
  );
}

export default App;

