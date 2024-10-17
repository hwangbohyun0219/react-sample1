import React, { useEffect, useState } from 'react';

const UseEffect1 = (props) => {
const[count1, setCount1] = useState(0);
const[count2, setCount2] = useState(0);



    useEffect(() => {
        console.log("UseEffect 실행!")
    },[count1]);



    return (
        <div>
            <div>count1 : {count1}</div>
            <div>count2 : {count2}</div>
            <button onClick={()=>{setCount1(count1 + 1)}}>count1 증가</button>
            <button onClick={()=>{setCount2(count2 + 1)}}>count1 증가</button>
        </div>
    );
};

export default UseEffect1;