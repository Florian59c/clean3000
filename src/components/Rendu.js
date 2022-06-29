import React from 'react'
import { EnTete } from './Header'
import signature from '../img/logo-clean3000-mini.png'

const Rendu = () => {
    return (
        <div>
            <EnTete />
            <div className='container'>
                <h1 className='renduH1'>Compte rendu du passage chez (nom du client) du (date)</h1>
                <h2 className='renduH2'>Observations :</h2>
                <div className='renduP'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ut molestiae cumque nesciunt quaerat. Quibusdam est dignissimos aliquam dolor sapiente rem animi impedit velit dolorum, error tenetur ratione, quaerat suscipit.</p>
                    <p className='nomTech'>Réalisé par (nom du technicien)</p>
                </div>
                <div className='sign'>
                    <img src={signature} alt="La signature de l'entreprise" />
                </div>
            </div>
        </div>
    )
}

export default Rendu