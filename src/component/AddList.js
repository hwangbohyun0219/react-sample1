import { useState } from "react";

function App() {
    const[list ,setList] = useState(["자바", "오라클"]);
    const [subject, setSubject] = useState("");
    const addSubject = ()=>{
        // console.log(subject);
        // //... : 아주 손쉽게 리스트에 추가를 할 수가 있다.
        // var list2 = [...list, subject];
        // console.log(list2);
        setList((prev)=>{
            console.log(prev);
            return [...prev, subject]
        });
    }
    return <>
        <input value={subject} onChange={(e) => {
            setSubject(e.target.value);
        }}></input>
        <button onClick={addSubject}>추가</button>
        <div>
            {list.map(item=>{
                return <li key = { item } > {item} </li>
            })}</div>
    </>
}

export default App;