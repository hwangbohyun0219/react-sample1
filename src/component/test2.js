import { useState } from "react";

function App() {
    const [count, setcount] = useState(1);
    const inputCount = (e)=>{
        console.log(e.target.value);
        setcount(e.target.value);
    }

        return <>
            <div>현재 카운트 : {count}</div>
            <input value={count} Onchange={ inputCount }></input>
            <button onClick={() => {
                setcount(count+inputCount);
            }}>증가</button>
            <button onClick={() => {
                setcount(count-inputCount);
            }}>감소</button>
            <button onClick={() => {
                setcount();
            }}>초기화</button>
        </>
}

export default App;