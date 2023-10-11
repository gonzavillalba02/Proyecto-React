import React from "react";
import "./Sign-up.css";
import {GiPayMoney} from "react-icons/gi";
import instagram from "../../assets/img/instagram-1.png"
import facebook from "../../assets/img/facebook-1.png"
import twitter from "../../assets/img/twitter-1.png"

const Sign_up = ({HandleSign}) => {

    const submit = (e) => {
        e.preventDefault()
        HandleSign(2)
    }

    return(
        <>
        <GiPayMoney className="sign-up-icono"/>
        <div className="sign-up-container">
            <div className="sign-up">
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
                <p>Ya tienes una cuenta?</p>
                <button
                onClick={()=>{HandleSign(0)}}
                >
                    Inicia sesión
                </button>
            </div>
            </div>
        </div>
        </>
    )
}

export default Sign_up