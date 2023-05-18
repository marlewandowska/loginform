import React from "react";

export interface IRegisterPageProps { }

const RegisterPage: React.FunctionComponent<IRegisterPageProps> = () => {
    return (
        <div className="wrapper">
            <div className="form-box login">
                <h2>Sign up</h2>
                <form action="#">
                    <div className="input-box">
                        <span className="icon"><ion-icon name="mail"></ion-icon></span>
                        <input type="email" required />
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="person-circle-outline"></ion-icon></span>
                        <input type="text" required />
                        <label>Username</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input type="password" required />
                        <label>Password</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input type="password" required />
                        <label>Repeat Password</label>
                    </div>

                    {/* <div className="requirements">
                        <ul className="first-site">
                            <li>Tymczasowe</li>
                            <li>Tymczasowe</li>
                            <li>Tymczasowe</li>
                        </ul>
                        <ul className="second-site">
                            <li>Tymczasowe</li>
                            <li>Tymczasowe</li>
                        </ul>
                    </div> */}
                    <button type="submit" className="btn">Sign up</button>
                    <div className="login-register">
                        <p>Already have an account?<a href="homelogin" className="register-link">Log in</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;