import React from 'react'
import Link from "react-router/es/Link";

class Login extends React.Component {
    render() {
        return <div>
            welcome to login<br/>
            <Link to={`/tripView/5a393cdd207aa127408cdad5`}>Create Trip</Link>
        </div>
    }
}

export default Login;