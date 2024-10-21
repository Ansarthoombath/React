import React from 'react'

function Eventhandling() {

    function sayHello(){
        alert("Hello")
    }

    function sayHi(){
        alert("welcome")
    }
  return (
    <div>
      <button onClick={sayHello}>Click Me</button>
      <button onMouseMove={sayHi}>Click</button>
    </div>
  )
}

export default Eventhandling
