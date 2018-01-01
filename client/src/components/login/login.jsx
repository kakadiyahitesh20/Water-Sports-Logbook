import React from 'react'
import Link from "react-router/es/Link";

class Login extends React.Component {
    render() {
        return <div>
            welcome to login<br/>
            <Link to={`/tripView/5a415e659b8578290c22497a`}>Create Trip</Link>
        </div>
    }
}

export default Login;