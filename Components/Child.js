import React from 'react'

function Child(props) {
    const {name,color,petals}= props.flower
  return (
    <div>
      <h2>Child Component</h2>
      <p>Flower Name:{name}</p>
      <p>color:{color}</p>
      <p>Number of Petals:{petals}</p>
    </div>
  )
}

export default Child
