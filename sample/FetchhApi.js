import React, { useEffect } from 'react'

function FetchhApi() {


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response=>response.json())
        .then(json=>console.log(json))

    },[])
  return (
    <div>
      Fetch api using fetch
    </div>
  )
}

export default FetchhApi
