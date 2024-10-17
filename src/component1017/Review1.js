import React, { useRef, useState } from 'react';

function Review1(props) {
    const [temp,setTemp] = useState(0);
    const refNum = useRef(10);
    console.log(refNum);
    let varNum = 10;

    const varIncreament = () => {
        varNum++;
        console.log("varNum => ", varNum);
        console.log("refNum =>", refNum.current);
    }

    const refIncreament = ()=>{
        refNum.current++;
        console.log("varNum => ", varNum);
        console.log("refNum =>", refNum.current);
    }

    const temFunc = () => {
        setTemp(temp+1);   
    }


    return (
            <div>
                {/* <button onClick="">렌더링</button> */}
                <div>
                    {varNum}
                    <button onClick={varIncreament}>증가</button>
                </div>
                <div>
                    {refNum.current}
                </div>
            </div>
        );
        
    
}

export default Review1;