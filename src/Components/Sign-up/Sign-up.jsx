import React from "react";
import "./Sign-up.css";
//import {GiPayMoney} from "react-icons/gi";
import instagram from "../../assets/img/instagram-1.png"
import facebook from "../../assets/img/facebook-1.png"
import twitter from "../../assets/img/twitter-1.png"
import logo from "../../assets/img/Icono.ico"

const Sign_up = ({HandleSign}) => {

    const submit = (e) => {
        e.preventDefault()
        HandleSign(2)
    }

    return(
        <>
        {/*<GiPayMoney className="sign-up-icono"/> Icono de mano */}
        <div className="sign-up-container">
            <div className="sign-up">
                <img src={logo} alt="Logo Banco" className="sign-up-logo-banco"/>
            <form className="sign-up-form">
                <input 
                type="text" 
                className="sign-up-form-input"
                placeholder="Username"
                />
                <input 
                type="text" 
                className="sign-up-form-input"
                placeholder="E-mail"
                />
                <input 
                type="password" 
                className="sign-up-form-input"
                placeholder="Password"
                />
                <input 
                type="password" 
                className="sign-up-form-input"
                placeholder="Repeat password"
                />

                <button 
                className="sign-up-form-button"
                onClick={submit}
                >
                    Create account
                </button>
            </form>
            <div className="sign-redes">
                <a href="https://instagram.com" target="_blank">
                    <img 
                    id="sign-redes-div-instagram" 
                    src={instagram} 
                    alt="Instagram" 
                    />
                </a>
                <a href="https://facebook.com" target="_blank">
                    <img 
                    id="sign-redes-div-facebook" 
                    src={facebook} 
                    alt="Facebook" 
                    />
                </a>
                <a href="https://twitter.com" target="_blank">
                    <img 
                    id="sign-redes-div-twitter" 
                    src={twitter} 
                    alt="Twitter" 
                    />
                </a>
            </div>
            <div className="sign-up-regis">
                <p>Do you have an account?</p>
                <button
                onClick={()=>{HandleSign(0)}}
                >
                    Sign in
                </button>
            </div>
            </div>
        </div>
        </>
    )
}

export default Sign_up