import { useState } from "react"
import React  from 'react'

function Shopingcart() {

   const [cardItems,setcardItems] =useState([])
   const products=[
    
    {id:1,name:'product 1',price:10},
    {id:2,name:'product 2',price:20},
    {id:3,name:'product 3',price:30},
    {id:4,name:'product 4',price:40}
   ]
  
   const addToCart =(product) =>{
    setcardItems([...cardItems,product])
   }

   const totalItems=cardItems.length
   const totalAmount=cardItems.reduce((total,item)=>total+item.price,0) 

  return (
    <div>
      <h1>Products</h1>
      {products.map(product =>(
        <div key={product.id}>
            <p>{product.name} -${product.price}</p>
            <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
      ))}

      <h1>Cart</h1>
      {cardItems.map(item=>(
        <div key={item.id}>
            <p>{item.name}-${item.price}</p>
        </div>
      ))}

      <h2>Total items:{totalItems}</h2>
      <h2>Total amount:{totalAmount}</h2>
    </div>
  )
}

export default Shopingcart
