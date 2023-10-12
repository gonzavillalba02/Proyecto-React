import React, { useState } from "react";
import "./Sign-up.css";
//import {GiPayMoney} from "react-icons/gi";
import instagram from "../../assets/img/instagram-1.png"
import facebook from "../../assets/img/facebook-1.png"
import twitter from "../../assets/img/twitter-1.png"
import logo from "../../assets/img/Icono.ico"
import TextField from '@mui/material/TextField';
import { validEmail, validPass, validUsername } from "./validaciones";
import {PiEyeClosedLight, PiEyeLight} from "react-icons/pi"

const Sign_up = ({HandleSign}) => {

    const [values, setValues] = useState(
        {
            username: {
                value: "",
                valid: null
            },
            email: {
                value: "",
                valid: null
            },
            password: {
                value: "",
                valid: null
            },
            repeated: {
                value: "",
                valid: null
            }
        }
        )

    const updateValues = (input, valor, valido) => {
        setValues(
            () => {
                return {
                    username: {
                        value: input==="username" ? valor : values.username.value,
                        valid: input==="username" ? valido : values.username.valid
                    },
                    email: {
                        value: input==="email" ? valor : values.email.value,
                        valid: input==="email" ? valido : values.email.valid
                    },
                    password: {
                        value: input==="password" ? valor : values.password.value,
                        valid: input==="password" ? valido : values.password.valid
                    },
                    repeated: {
                        value: input==="repeated" ? valor : values.repeated.value, //la contra repeated debe ser igual a la contra
                        valid: input==="repeated" ? ((valor===values.password.value) ? false : true) : (input==="password" ? (valor === values.repeated.value ? false : true) : values.repeated.valid )
                    }
                }
            }
        )
    }

    const submit = (e) => {
        e.preventDefault()
        if(values.username.valid===false && values.email.valid===false && values.password.valid===false && values.repeated.valid===false){
            console.log(values, "-" , !values.username.valid)
            HandleSign(2)
        }else{
            if(values.username.valid !== false){
                updateValues("username", values.username.value, true)
            }else if (values.email.valid !== false){
                updateValues("email", values.email.value, true)
            }else if (values.password.valid !== false){
                updateValues("password", values.password.value, true)
            }else if (values.repeated.valid !== false){
                updateValues("repeated", values.repeated.value, true)
            }

        }
    }

    const styledInputs = (valid) => (valid === true || valid === null) ? {backgroundColor: "#F2F4F4",} : {backgroundColor: 'initial',}

    const [eye,setEye] = useState(true)

    return(
        <>
        {/*<GiPayMoney className="sign-up-icono"/> Icono de mano */}
        <div className="sign-up-container">
            <div className="sign-up">
                <img src={logo} alt="Logo Banco" className="sign-up-logo-banco"/>
                <form className="sign-up-form">
                    <TextField 
                    type="text" 
                    style={styledInputs(!values.username.valid)}
                    label="Username"
                    margin="normal"
                    color="secondary"
                    fullWidth
                    value={values.username.value}
                    onChange={(e)=>updateValues("username", e.target.value, false)}
                    onBlur={(e)=>updateValues("username", e.target.value, !validUsername(e.target.value))}
                    error={values.username.valid}
                    helperText={values.username.valid && "The username must be between 5 and 25 characters."}
                    />
                    <TextField 
                    type="text" 
                    style={styledInputs(!values.email.valid)}
                    label="E-mail"
                    margin="normal"
                    color="secondary"
                    fullWidth
                    value={values.email.value}
                    onChange={(e) => updateValues("email", e.target.value, false)}
                    onBlur={(e)=>updateValues("email", e.target.value, !validEmail(e.target.value))}
                    error={values.email.valid}
                    helperText={values.email.valid && "The email must be between 8 and 50 characters, and contain '@'"}
                    />

                    {eye === true ? 
                    <PiEyeClosedLight 
                    className="sign-up-eye"
                    onClick={() => setEye(false)}
                    /> : 
                    <PiEyeLight 
                    className="sign-up-eye"
                    onClick={() => setEye(true)}
                    />}

                    <TextField 
                    type={eye === true ? "password" : "text"} 
                    style={styledInputs(!values.password.valid)}
                    label="Password"
                    margin="normal"
                    color="secondary"
                    fullWidth
                    value={values.password.value}
                    onChange={(e) => updateValues("password", e.target.value, false)}
                    onBlur={(e)=>updateValues("password", e.target.value, !validPass(e.target.value))}
                    error={values.password.valid}
                    helperText={values.password.valid && "The password must be between 8 and 50 characters and contain one of the following characters ' # - _ '"}
                    />

                    {eye === true ? 
                    <PiEyeClosedLight 
                    className="sign-up-eye"
                    onClick={() => setEye(false)}
                    /> : 
                    <PiEyeLight 
                    className="sign-up-eye"
                    onClick={() => setEye(true)}
                    />}

                    <TextField 
                    type={eye === true ? "password" : "text"}  
                    style={styledInputs(!values.repeated.valid)}
                    label="Repeat password"
                    margin="normal"
                    color="secondary"
                    fullWidth
                    value={values.repeated.value}
                    onChange={(e) => updateValues("repeated", e.target.value)}
                    onBlur={(e) => updateValues("repeated", e.target.value)}
                    error={values.repeated.valid}
                    helperText={values.repeated.valid && "Passwords do not match"}
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