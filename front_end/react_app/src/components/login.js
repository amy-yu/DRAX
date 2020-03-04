import React from "react";
import '../gui/css/common.css';
import '../gui/css/login_signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import Logo from '../gui/img/logo.png';
import background from '../gui/img/bg.png'

class Login extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = 'signup_login_container'>
                <div id="bg-outer">
                    <div className="wrap-form">
                        <form className="form">
                            <span className="form-title">Welcome to</span>
                            <div className="wrap-logo btm-space">
                                <img className="logo" src={Logo} alt="logo" />
                            </div>
                            <div className="wrap-form-input btm-space">
                                <input type="text" name="username" placeholder="Username" minLength={4} maxLength={32} required />
                            </div>
                            <div className="wrap-form-input btm-space">
                                <input type="password" name="password" placeholder="Password" minLength={8} maxLength={128} required />
                            </div>
                            <div>
                                <button className="btn btn-primary login-btn" type="submit">Log in</button>
                            </div>
                            <Link to={{ pathname: '/signup'}}>Sign up</Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;