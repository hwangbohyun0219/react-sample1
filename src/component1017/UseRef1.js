import React, {useRef, useState} from 'react';

function UseRef1(props) {
    const [stateNum, setStateNum] = useState(0);
    const refNum = useRef(0);
    var varNum = 0;

    console.log("stateNum => " ,stateNum);
    console.log("refNum => " ,refNum.current);
    console.log("varNum => " ,varNum);



    return (
        <div>
            <button onClick={()=>{
                setStateNum(stateNum+1)
            }}>stateNum 증가</button>

            {/* <button onClick={()=>{
                refNum.current = 
            }}>stateNum 증가</button> */}

            <button onClick={()=>{
                setStateNum(varNum)
            }}>varNum 증가</button>

        </div>
    );
}

export default UseRef1;