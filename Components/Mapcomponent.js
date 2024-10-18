import React from 'react'

function Mapcomponent() {
const people=[
    {id:1,name:"sam",gender:"male",age:30},
    {id:2,name:"jincy",gender:"female",age:28},
    {id:3,name:"ajay",gender:"male",age:13},
    {id:4,name:"Fasi",gender:"female",age:8},
]


return(
    <div>
        {people.map(person =>{
            return (
                <h4>{person.id}<br/>
                {person.name} -{person.age} years old
                </h4>
            )
        })}
    </div>
)

}


export default Mapcomponent