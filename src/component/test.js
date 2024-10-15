import  { useState } from "react";



function App() {
    const [text, setText] = useState("1번 메뉴");
    // const state = useState(0);
    // const count = state[0];
    // const setCount = state(1);
    
    
    return(<>
        <div>현재 메뉴 : {text}</div>
        <div>
            <button onClick={()=>{
                setText("1번 메뉴");
            }}>1번 메뉴!</button>

            <button onClick={()=>{
                setText("2번 메뉴");
            }}>2번 메뉴!</button>       

        </div>
    </>);
}

export default App;