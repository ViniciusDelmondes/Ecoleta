import React from 'react'
import Sucess from '../../assets/sucess.gif'
import {Link} from 'react-router-dom'
import './alert.css'

const AlertSucess = () => {
    return(
        <div className="principal">
            <img src={Sucess} id="iconSucess"/>
            <h1> Ponto de coleta cadastrado com sucesso! </h1>
            <Link to="/">
                <strong>Entendido!</strong>
            </Link>
        </div>
    )
}

export default AlertSucess;