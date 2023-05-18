import React from "react";

export interface ILoginPageProps { };

const LoginPage: React.FunctionComponent<ILoginPageProps> = props => {
    return (
        <div className="wrapper">
            <div className="form-box login">
                <h2>Log in</h2>
                <form action="#">
                    <div className="input-box">
                        <span className="icon"><ion-icon name="mail"></ion-icon></span>
                        <input type="email" required />
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input type="password" required />
                        <label>Password</label>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit" className="btn">Login</button>
                    <div className="login-register">
                        <p>Don't have an account?<a href="/homeregister" className="register-link">Sign up</a></p>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default LoginPage;