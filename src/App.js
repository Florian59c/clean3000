import './App.css';
import { Component } from 'react'; // permet d'utiliser "export default class app extends Component"
import "./index.css"
import { Link } from 'react-router-dom';
import { EnTete } from './components/Header';
import { Button } from 'antd';

export default class app extends Component {

  render() {
    return (
      <div className="container">
        <EnTete />
        <div>
          <h1>Avis de passage</h1>
          <div>
            <div>
              <label for="selectClient"><h2>Nom de l'entreprise ou du client :</h2></label>
              <select name="client" id="selectClient">
                <option value="new" selected>Nouveau client</option>
                <option value="Arch">Archimed</option>
                <option value="BC">BeCom</option>
                <option value="JP">Jérôme Parguey</option>
                <option value="PL">Patrick Livran</option>
                <option value="JA">Les jardins d'Ariana</option>
              </select>
            </div>
            <div>
              <label for="selectTech"><h2>Nom du technicien :</h2></label>
              <select name="Technicien" id="selectTech">
                <option value="Ax">Axel</option>
                <option value="Flo">Florian</option>
                <option value="GG">Gaëtan</option>
                <option value="Nico">Nicolas</option>
              </select>
            </div>
            <div>
              <label for="inputDate"><h2>Date d'intervention :</h2></label>
              <input id="inputDate" name="date" type="text" required />
            </div>
          </div>
          <div>
            <h2>Observations :</h2>
            <label for="Message"></label>
            <textarea placeholder="taper votre compte rendu ici" name="message" id="Message" rows="5" required></textarea>
          </div>
          <Button onClick>Enregistrer</Button>
        </div>
      </div>
    )
  }

}