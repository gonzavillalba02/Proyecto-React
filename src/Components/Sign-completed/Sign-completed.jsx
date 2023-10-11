import React from "react";
import "./Sign-completed.css"
import completed from "../../assets/img/sign-completed.png"
import instagram from "../../assets/img/instagram-1.png"
import facebook from "../../assets/img/facebook-1.png"
import twitter from "../../assets/img/twitter-1.png"

const Sign_completed = ({HandleSign}) => {
    return(
        <div className="sign-completed-container">
            <h3>Registration completed !</h3>
            <img src={completed} alt="Registro completado" className="sign-completed-logo-check"/>
            <button 
            className="sign-completed-button"
            onClick={()=>{HandleSign(0)}}
            >
                Log in
            </button>
            <div className="sign-redes-completed">
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
        </div>
    )
}

export default Sign_completed;