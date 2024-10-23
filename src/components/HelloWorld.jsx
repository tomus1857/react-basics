import React from "react"

const HelloWorld = () => {

    function handleClick() {
        alert("Button clicked");
    }
    
    return <button onClick={handleClick}>Click</button>
}

export default HelloWorld