import './App.css';
import { Component } from 'react'; // permet d'utiliser "export default class app extends Component"
import "./index.css"
import { Link } from 'react-router-dom';

export default class app extends Component {

  render() {
    return (
      <div className="container">
        <h1>page principale</h1>
      </div>
    )
  }

}