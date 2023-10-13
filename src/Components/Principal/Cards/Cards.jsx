import React from "react";
import "./Cards.css"
import {IoRestaurant} from "react-icons/io5"
import {BiSolidCarCrash} from "react-icons/bi"
import {FaUserDoctor} from "react-icons/fa6"
import {BsFillHouseGearFill} from "react-icons/bs"

const Cards = () => {
    return (
        <>
            <div className="cards-container">
                <div className="cards-container-card">
                    <div className="cards-container-card-main">
                        <IoRestaurant className="cards-container-card-main-icono"/>
                        <div className="cards-container-card-main-content">
                            <h4>Restaurante</h4>
                            <p>Pizza Hut</p>
                            <p>$450.00</p>
                        </div>
                    </div>
                    <p className="cards-container-card-fecha">11 JUN</p>
                </div>
            </div>

            <div className="cards-container">
                <div className="cards-container-card">
                    <div className="cards-container-card-main">
                        <BiSolidCarCrash className="cards-container-card-main-icono"/>
                        <div className="cards-container-card-main-content">
                            <h4>Transporte</h4>
                            <p>Uber</p>
                            <p>$55.00</p>
                        </div>
                    </div>
                    <p className="cards-container-card-fecha">9 JUN</p>
                </div>
            </div>

            <div className="cards-container">
                <div className="cards-container-card">
                    <div className="cards-container-card-main">
                        <FaUserDoctor className="cards-container-card-main-icono"/>
                        <div className="cards-container-card-main-content">
                            <h4>Salud</h4>
                            <p>Farmacias A.</p>
                            <p>$150.00</p>
                        </div>
                    </div>
                    <p className="cards-container-card-fecha">8 JUN</p>
                </div>
            </div>
            <div className="cards-container">
                <div className="cards-container-card">
                    <div className="cards-container-card-main">
                        <BsFillHouseGearFill className="cards-container-card-main-icono"/>
                        <div className="cards-container-card-main-content">
                            <h4>Utilidades</h4>
                            <p>Cuenta de Luz</p>
                            <p>$340.00</p>
                        </div>
                    </div>
                    <p className="cards-container-card-fecha">8 JUN</p>
                </div>
            </div>
        </>
    )
}

export default Cards