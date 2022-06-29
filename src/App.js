import './App.css';
import { Component } from 'react'; // permet d'utiliser "export default class app extends Component"
import "./index.css"
import { Link } from 'react-router-dom';
import { EnTete } from './components/Header';
import { Button, Col, Row } from 'antd';
import techniciens from "./components/Techniciens";
import clients from "./components/Clients";
import infos from "./components/Infos";

export default class app extends Component {

  state = {
    techniciens,
    clients,
    infos
  }

  envoie(index) {
    const nouvelleInfo = { // creation d'une nouvelle constante ayant une tache avec un id defini grace a la date et un titre recuperer dans la case input
      id: Date.now(),
      client: this.state.clients[index].name,
      technicien: this.state.techniciens[index].name,
      date: "",
      texte: ""
    };

    const copyInfo = [...this.state.infos]; // creer une copy de ma state pour ne pas faire de mutation
    copyInfo.push(nouvelleInfo); // ajoute ma nouvelle tache a ma copie

    this.setState({ // steState met à jour le state grace aux affectation en dessous
      infos: copyInfo
    });
    // console.log(copyInfo[1].client);
  }

  render() {

    const listClients = this.state.clients.map((client, index) => {
      return (
        <option key={client.id} value={client.id}>{client.name}</option>
      )
    })

    const listTechniciens = this.state.techniciens.map((technicien, index) => {
      return (
        <option key={technicien.id} value={technicien.id}>{technicien.name}</option>
      )
    })

    return (
      <div>
        <EnTete />
        <div className="container">
          <h1>Avis de passage</h1>
          <div>
            <Row justify="space-evenly" gutter={[16, 16]}>
              <Col xs={24} lg={8}>
                <label for="selectClient"><h2>Nom de l'entreprise ou du client :</h2></label>
                <select name="client" id="selectClient">
                  {listClients}
                </select>
              </Col>
              <Col xs={24} lg={8}>
                <label for="selectTech"><h2>Nom du technicien :</h2></label>
                <select name="Technicien" id="selectTech">
                  {listTechniciens}
                </select>
              </Col>
              <Col xs={24} lg={8}>
                <label for="inputDate"><h2>Date d'intervention :</h2></label>
                <input id="inputDate" name="date" type="text" required />
              </Col>
            </Row>
          </div>
          <div>
            <h2>Observations :</h2>
            <label for="Message"></label>
            <textarea placeholder="taper votre compte rendu ici" name="message" id="Message" rows="5" required></textarea>
          </div>
          <div>
            <Link to={'/rendu'}>
              <Button className='bouton' onClick={() => this.envoie()}><p>Enregistrer</p></Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

}