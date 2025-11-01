import React, { useEffect, useMemo, useRef, useState } from 'react'
import styles from "../Practice/Practice.module.css"
const Practice = () => {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  let val=useRef(0);

  let btnRef=useRef();

  useEffect(() => {
    console.log("Render")
  })
  

  const handleIncrement=()=>{
    setCount(count+1);
    val.current++;
    console.log(val);
  }

  const increaseRef=()=>{
    val.current=val.current+1;
    console.log(val)
  }

  const changeColor=()=>{

  }

  return (
    <div className={`${styles.main}`}>

      <button ref={btnRef} className={`${styles.increment}`} onClick={handleIncrement}>+</button>
      <br />
    <button>Change color of + button</button>

      <h3>Count {count}</h3>

    <input type="number" placeholder='Enter number' value={input} 
     onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setInput(Number(e.target.value))}/>

     

    </div>
  )
}

export default Practice;