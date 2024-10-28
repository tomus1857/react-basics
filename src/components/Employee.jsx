import React from "react";

class Employee extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "Tomasz"
        }
    }

    updateEmployee() {
        this.setState ({
            firstName: "Paweł"
        });
    }
    render() {
        return(
            <div>
                <h1>Employee details</h1>
                <p>{this.state.firstName}</p>
                <button onClick={() => this.updateEmployee()}>Update employ</button>
            </div>
        )
    }
}

export default Employee