import React, { useEffect } from 'react'
import axios from "axios"

function FetchAxios() {

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => console.log(response.data))
    },[])
  return (
    <div>
      Another way to fetch api
    </div>
  )
}

export default FetchAxios
