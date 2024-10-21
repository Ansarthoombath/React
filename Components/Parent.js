import React from 'react'
import Child from './Child'

function Parent() {

    const flower ={
        name:"Rose",
        color:"Red",
        petals:5
    }
    const fruit ={
        name:"Apple",
        color:"Red",
        petals:"Nil"
    }
    const next={
        name:"Orange",
        color:"Green",
        petals:"Nil"
    }


  return (
    <div>
      <h1>Parent component</h1>
      <Child flower={flower}/>
      <Child flower={fruit}/>
      <Child flower={next}/>
    </div>
  )
}

export default Parent
