import React, { useState } from "react";
import Sign_in from "../Sign-in/Sign-in";
import Sign_up from "../Sign-up/Sign-up";
import Sign_completed from "../Sign-completed/Sign-completed";
import "./Sign.css"

const Sign = ({handleStep}) => {

    const [sign, setSign] = useState(0);

    const HandleSign = (num) => {
        setSign(num)
    }

    return (
        <div className="dom-sign">
                {sign===0 && <Sign_in handleStep={handleStep} HandleSign={HandleSign}/>}
                {sign===1 && <Sign_up HandleSign={HandleSign}/>}
                {sign===2 && <Sign_completed HandleSign={HandleSign}/>}
        </div>
    )
}

export default Sign