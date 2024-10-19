import React from "react";

const Stylevariable =()=>{
    const mystyle={backgroundColor:"blue"}
    const newStyle={color:"green"}

    return(
        <div>

            <p style={mystyle}>this is a para</p>
            <h1 style={newStyle}> Introduction</h1>
        </div>
    )
}

export default Stylevariable