import './App.css';
import { Component } from 'react'; // permet d'utiliser "export default class app extends Component"
import "./index.css"
import { Link } from 'react-router-dom';
import { EnTete } from './components/Header';

export default class app extends Component {

  render() {
    return (
      <div className="container">
        <EnTete />
        <div>
          <h1>Comming soon</h1>
        </div>
      </div>
    )
  }

}