import { useState } from "react"

const ConditionalRendering = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    let message;
    if(isLoggedIn) {
        message = <p>Welcome user</p>
    } else {
        message = <p>Please log in</p>
    }

    function handleLogin() {
        setIsLoggedIn(true)
    }

    return (
        <div>
            {
                isLoggedIn && <p>Welcome user</p>
            }
            
            <button onClick={handleLogin}>Login</button>
        </div>
    )

}
export default ConditionalRendering