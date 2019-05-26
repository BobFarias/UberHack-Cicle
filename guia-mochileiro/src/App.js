import React, { Component, onMarkerClick, onMapClicked} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import header from "./img-header.jpg";
import card1 from "./card1.jpeg";
import logo from "./logo.png";
import logoPng from "./cicle.png";

export class Site extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="logoContainer">
           <img src={logoPng} alt="Ciclo" className="imgLogoPng" />
        </div>
        <div className="Header">
          <img src={header} alt="Ciclo" className="imgHeader" />
        </div>
        <div className="background" />
        <div className="ContainerCard">
         <div className="Card">
            <h4>
              Conheça a plataforma Cicle!
            </h4>
            <p>
              O primeiro portal que integra você a um meio alternativo de transporte urbano. Conecte-se à cidade e entre 
              em ciclo!
            </p>
          </div>

          <div className="Card">
            <div className="CardHeader">
              <h2>Defina uma rota</h2>
            </div>
            <p>Descubra uma rota ideal para você!</p>
            <form>
            <label>
              <p className="InputText">Partida:</p>
              <select className="form-control">
                <option value="grapefruit" placeholder="">Apolo 235 - Jump Brasil</option>
              </select>
              <p className="InputText">Chegada:</p>
              <select className="form-control" value={this.state.value} onChange={this.handleChange}>
                <option value="grapefruit" >Museu Militar do Forte do Brum</option>
              </select>
            </label>
          </form>
          <Link to="/site"><div className="buttonPesquisar">
            <p className="Buscar"><i className="fas fa-search-location IconSearch"></i>Buscar Rotas</p>
          </div></Link>
          </div>

          <div className="Card">
            <div className="CardHeader">
              <h2>Aprenda</h2>
            </div>
              <p>Encontre ciclistas dispostos a te 
              ensinar a pedalar</p>
          </div>

          <div className="Card">
            <div className="CardHeader">
              <h2>Preparativos</h2>
            </div>
            <p>Dicas e preparativos necessários antes de pedalar</p>
          </div>
        </div>

        <div className="containerFooter">
          <img src={logo} alt="Logo" className="imgLogoFooter" />
          <p className="credits">Front End - @bobhenrique_</p>
        </div>

      </div>
    );
  }
}

export default (Site)