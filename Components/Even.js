import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
function Even(){
    let arr=[3,6,5,8,10]
    let evenNumbers=[]

    arr.map((num)=>{
        if(num%2===0){
           evenNumbers.push(num)
        }
        return evenNumbers
    })

    return (
        <div>
        <p>original Array:{arr.join(',')}</p>
        <p>Even:{evenNumbers.join(',')}</p>
        </div>
    )
}

export default Even