import { useState } from "react"

const User = () => {
    const [firstName, setFirstName] = useState('Tomasz')
    const [lastName, setLastName] = useState('Antosik')
    const [email, setEmail] = useState('sda@o2.pl')

    function updateUser() {
        setFirstName('Paweł')
        setLastName('Kolaczki')
        setEmail("ada@o2.pl")
    }
    return (
        <div>
            <h1>Employee details</h1>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
            <button onClick={updateUser}>Update user</button>
        </div>
    )
}

export default User