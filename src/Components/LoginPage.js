import React, { useState } from 'react'
import './CSS/login.css'

function LoginPage() {
    const [signup, setsignup] = useState(null);
    const login = () => {
        setsignup(true);
    }
    const sign = () => {
        setsignup(false);
    }

    return (
        <div className='main_background'>
            <div className={signup ? "wrapper animate-signIn" : "wrapper animate-signUp"}>
                <div className="form-wrapper sign-up">
                    <form action="">
                        <h2>Sign Up</h2>
                        <div className="input-group">
                            <input type="text" required />
                            <label htmlFor="">Username</label>
                        </div>
                        <div className="input-group">
                            <input type="email" required />
                            <label htmlFor="">Email</label>
                        </div>
                        <div className="input-group">
                            <input type="password" required />
                            <label htmlFor="">Password</label>
                        </div>
                        <button type="submit" className="btnlogin">Sign Up</button>
                        <div className="sign-link">
                            <p>Already have an account? <span onClick={sign} className="signIn-link">Sign In</span></p>
                        </div>
                    </form>
                </div>

                <div className="form-wrapper sign-in">
                    <form action="">
                        <h2>Login</h2>
                        <div className="input-group">
                            <input type="text" required />
                            <label htmlFor="">Username</label>
                        </div>
                        <div className="input-group">
                            <input type="password" required />
                            <label htmlFor="">Password</label>
                        </div>
                        <div className="forgot-pass">
                            <a href="/">Forgot Password?</a>
                        </div>
                        <button type="submit" className="btnlogin">Login</button>
                        <div className="sign-link">
                            <p>Don't have an account? <span onClick={login} className="signUp-link">Sign Up</span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
