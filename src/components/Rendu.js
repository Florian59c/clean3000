import React from 'react'
import { EnTete } from './Header'
import signature from '../img/logo-clean3000-mini.png'
import infos from "./Infos";

const Rendu = () => {
    return (
        <div>
            <EnTete />
            <div className='container'>
                <h1 className='renduH1'>{`Compte rendu du passage chez "${infos[0].client}" du ${infos[0].date}`}</h1>
                <h2 className='renduH2'>Observations :</h2>
                <div className='renduP'>
                    <p>{`${infos[0].texte}`}</p>
                    <p className='nomTech'>{`Réalisé par ${infos[0].technicien}`}</p>
                </div>
                <div className='sign'>
                    <img src={signature} alt="La signature de l'entreprise" />
                </div>
                <h1></h1>
            </div>
        </div>
    )
}

export default Rendu