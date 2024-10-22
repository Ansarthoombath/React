import { useState } from "react";

function Mycount(){
    const [count,setCount]=useState(0)
    function Increment(){
        setCount(count+1)
    }
    function Decrement(){
        setCount(count-1)
    }
    function Reset(){
        setCount(0)
    }


return(
    <>

     <h3>{count}</h3>
     <button onClick={Increment}>+</button>
     <button onClick={Decrement}>-</button>
     <button onClick={Reset}>Reset</button>
    </>
)
}
export default Mycount