import React, { useState } from "react";
import "./Sign-in.css";
import instagram from "../../assets/img/instagram-1.png"
import facebook from "../../assets/img/facebook-1.png"
import twitter from "../../assets/img/twitter-1.png"
import logo from "../../assets/img/Icono.ico"
//import {GiReceiveMoney} from "react-icons/gi"
import TextField from '@mui/material/TextField';
import {PiEyeClosedLight, PiEyeLight} from "react-icons/pi"

const Sign_in = ({HandleSign}) => {

    const [userName, setUserName] = useState({value: "", valid: null})
    const [pass, setPass] = useState({value: "", valid: null})
    const [eye, setEye] = useState(true) //true -> password / ojo cerrado

    return(
        <>
        {/*<GiReceiveMoney className="sign-in-icono"/>*/}
        <div className="sign-in-container">
            <div className="sign-in">
                <img src={logo} alt="Logo banco" className="sign-in-logo-banco"/>
                <form className="sign-in-form">
                    <div className="sign-in-form-inputspace">

                    <TextField 
                    type="text" 
                    className="sign-in-form-input"
                    label="Username"
                    color="secondary"
                    margin="normal"
                    fullWidth
                    value={userName.value}
                    onChange={(e)=>setUserName({value: e.target.value, valid: null})}
                    />

                    {eye === true ? 
                    <PiEyeClosedLight 
                    className="sign-in-eye"
                    onClick={() => setEye(false)}
                    />
                     : 
                    <PiEyeLight 
                    className="sign-in-eye"
                    onClick={() => setEye(true)}
                    />}

                    <TextField 
                    type={eye === true ? "password" : "text"} 
                    className="sign-in-form-input"
                    label="Password"
                    color="secondary"
                    margin="normal"
                    fullWidth
                    value={pass.value}
                    onChange={(e)=> setPass({value: e.target.value, valid:null})}
                    />
                    </div>

                    <button 
                    onClick={(e) => {
                        e.preventDefault()
                        console.log(userName.value, " ", pass.value)
                    }}
                    className="sign-in-form-button"
                    >
                        Log in
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
                <div className="sign-in-regis">
                    <p>You don't have an account?</p>
                    <button
                    onClick={ () => {
                        HandleSign(1)
                    }}
                    >Sign up</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Sign_in