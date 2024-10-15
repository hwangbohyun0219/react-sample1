//가장 중요, 데이터 상태 관리

import  { useState } from "react";



function App() {
    const [count, setCount] = useState(0);
    // const state = useState(0);
    // const count = state[0];
    // const setCount = state(1);
    
    
    return(<>
        <div>현재 숫자 : {count}</div>
        <div>
            <button onClick={()=>{
                setCount(count + 1);
            }}>증가!</button>
        </div>
    </>);
}

export default App;