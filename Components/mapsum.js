import React from 'react'

function Mapcom() {
const arr=[2,4,5,6,7]


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