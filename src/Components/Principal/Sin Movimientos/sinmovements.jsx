import React from "react";
import "./sinmovements.css"
import dashboard from "../../../assets/img/dashboard.png"

const Sinmovements = () => {
    return(
        <div className="without-movements">
            <p>Sin movimientos...</p>
            <img src={dashboard} alt="Sin movimientos" />
        </div>
    )
}

export default Sinmovements