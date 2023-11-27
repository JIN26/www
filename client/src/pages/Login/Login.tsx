import { useState } from "react"
import './Login.scss'
import desktopImg from '../../assets/illustration-sign-up-desktop.svg'
const Login = () => {
    const [isValid, _setIsValid] = useState(true);
  return (
    <div className="container">
        <div className="login-container">
            <div className="login-section-left">
                <div className="top-img">

                </div>
                <div className="content-left">
                    <h1 className="title">Stay updated!</h1>
                    <p className="paragraph">
                        Join 60,000+ product managers receiving monthly updates on:
                    </p>
                    <ul>
                        <li>
                            <span>✔</span>
                            <p>Product discovery and building what matters</p>
                        </li>

                        <li>
                            <span>✔</span>
                            <p>Measuring to ensure updates are a success</p>
                        </li>

                        <li>
                            <span>✔</span>
                            <p>And much more!</p>
                        </li>
                    </ul>
                    <div className="form-container">

                        <div>
                            <b>Email address</b>
                            <p>{isValid ? "": "Valid email required"}</p>
                        </div>

                        <input type="text" placeholder="email@company.com"/>
                        <button className="login-btn">Subcribe to monthly newsletter</button>
                    </div>
                </div>
            </div>

            <div className="login-section-right">
                <img src={desktopImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Login
