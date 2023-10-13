import React, { useState } from "react";
import "./principal.css"
import logo from "../../assets/img/Icono - copia.png"
import user from "../../assets/img/user.png"
import chancho from "../../assets/img/chancho.svg"
import plus from "../../assets/img/plus.png"
import {PiEyeClosedLight, PiEyeLight} from "react-icons/pi"
import Sinmovements from "./Sin Movimientos/sinmovements";
import Cards from "./Cards/Cards";
import Agregar from "./Agregar/Agregar";


const Principal = () => {

    const [eye, setEye] = useState(true)
    const [cardStep, setCardStep] = useState(0) //esto es temporal cuando agregue la base de datos esto voy a cmabiar por que verifique que la lista este vacia o si teiene algo o etc

    const actualizarCardStep = () => {
        setCardStep(!cardStep)
    }

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
                        <p className="principal-container-1-info-plata-numeros">
                            {eye === true ? 606.747 : "********"}
                        </p>
                        {eye === true ? 
                        <PiEyeLight 
                        onClick={() => setEye(false)}
                        className="principal-container-1-info-plata-eye"
                        /> : 
                        <PiEyeClosedLight 
                        onClick={() => setEye(true)}
                        className="principal-container-1-info-plata-eye"
                        />}
                    </div>
                </div>
                <img src={chancho} alt="Imagen" />
            </div>
            <div className="principal-container-2">
                <div 
                className="principal-container-2-div"
                >
                    <div className="principal-container-2-div-cards">
                        {cardStep === 0 ? <Sinmovements /> 
                        : (cardStep === true ? <Cards /> : <Agregar />)}
                    </div>
                    <div className="principal-container-2-botones">
                        <button className="principal-container-2-botones-vermas">Ver más</button>
                        <button 
                        className="principal-container-2-botones-plus-button"
                        onClick={actualizarCardStep}
                        >
                            <img 
                            className="principal-container-2-botones-plus-img" 
                            src={plus} 
                            alt="Agregar" 
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Principal