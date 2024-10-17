import React from 'react';

function Input(props) {
    return (
        <div>
            <input placeholder='첫번째숫자'></input>
            <input placeholder='두번째숫자'></input>
            <input placeholder='+,-,*,/'></input>
            <button>계산!</button>
        </div>
    );
}

export default Input;