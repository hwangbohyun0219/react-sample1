import React, { useMemo, useState } from 'react';
function numFunc (count){
    //5초
    for(var i=0; i<50000; i++){
        console.log(i);
    }
    return count * 2;
}

function pulsFunc(count){
    return count + 1;
}


function UseMemo1(props) {
    const [count, setcount] = useState(1);
    const [count2, setcount2] = useState(1);

    //var num = numFunc(count);
    var num = useMemo(()=>{
        return numFunc(count);
    },[count]);
    
    var num2 = pulsFunc(count2);
    return (
        <div>
            {num}
            <button onClick={()=>{setcount(count+1)}}>증가</button>
    
            {num2}
            <button onClick={()=>{setcount2(count2+1)}}>증가22</button>
        </div>
    );
}

export default UseMemo1;