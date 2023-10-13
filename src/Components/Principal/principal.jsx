import React from "react";
import "./principal.css"
import {IoRestaurant} from "react-icons/io5"
import {BiSolidCarCrash} from "react-icons/bi"
import {FaUserDoctor} from "react-icons/fa6"
import logo from "../../assets/img/Icono - copia.png"
import user from "../../assets/img/user.png"
import chancho from "../../assets/img/chancho.png"
import plus from "../../assets/img/plus.png"
import dashboard from "../../assets/img/dashboard.png"
import {PiEyeClosedLight, PiEyeLight} from "react-icons/pi"


const Principal = () => {
    return(
        <div className="principal">
        <nav className="principal-nav">
            <img src={logo} alt="Logo Banco" className="principal-nav-logo"/>
            <ul className="principal-nav-lista">
                <li><button>Inicio</button></li>
                <li><button>Gastos</button></li>
                <li><button>Ayuda</button></li>
                <li><button>Cuenta</button></li>
                <img src={user} alt="Imagen usuario" className="principal-nav-user"/>
            </ul>
        </nav>
        <section className="principal-container">
            <div className="principal-container-1">
                <div className="principal-container-1-info">
                    <p className="principal-container-1-info-nombre">gonza_villalba02</p>
                    <h3 className="principal-container-1-info-titulo">Saldo Disponible</h3>
                    <div className="principal-container-1-info-plata">
                        <p className="principal-container-1-info-plata-signo">$</p>
                        <p className="principal-container-1-info-plata-numeros">606.747</p>
                        <PiEyeLight className="principal-container-1-info-plata-eye"/>
                    </div>
                </div>
                <img src={chancho} alt="Imagen" />
            </div>
            <div className="principal-container-2">
                <div className="principal-container-2-div">
                    <div className="principal-container-2-div-cards">
                        <p>Sin movimientos...</p>
                        <img src={dashboard} alt="Sin movimientos" />
                    </div>
                    <div className="principal-container-2-botones">
                        <button className="principal-container-2-botones-vermas">Ver más</button>
                        <button className="principal-container-2-botones-plus-button"><img className="principal-container-2-botones-plus-img" src={plus} alt="Agregar" /></button>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Principal