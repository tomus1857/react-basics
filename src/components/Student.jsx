const Student = (props) => {
    const {firstName, lastName, email} = props
    return (
        <div>
            <h1>Student details</h1>
            <p>Student first name: {firstName}</p>
            <p>Student last name: {lastName}</p>
            <p>Student email adress: {email}</p>

        </div>
    )
}

export default Student