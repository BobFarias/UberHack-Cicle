import React, { Component, onMarkerClick, onMapClicked} from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polyline,} from 'google-maps-react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import logo from "./logo.png";
import parkBike from "./icon-park-bike.png";
import fixBike from "./icon-fix-bike.png";
import stop from "./icon-stop.png";

export class App extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    const triangleCoords = [
      {lat: -8.060457, lng: -34.872072},
      {lat: -8.060280, lng: -34.872798},
      {lat: -8.053064, lng: -34.871645},
    ];
    return (
      <div className="App">
          <div className="navbar-cellphone">
              <div className="menu-icon-2">
              <Link to="/"><i className="fas fa-search-location barsPlataform"></i></Link>
              </div>
              <div className="containerLogo">
                <img src={logo} alt="Logo" className="imgLogo" />
              </div>
          </div>

          <div className="ContainerLegenda">
            <h2 className="FontStyleLegenda">Legenda</h2>
            <div className="row tableLegenda">
              <div className="containerIconLegenda">
                <img src={fixBike} alt="FixBike" />
              </div>
              <p>Oficina de Manutenção</p>
            </div>
            <div className="row tableLegenda">
              <div className="containerIconLegenda">
                <img src={parkBike} alt="FixBike" />
              </div>
              <p>Bicicletário</p>
            </div>
            <div className="row tableLegenda">
              <div className="containerIconLegenda">
                <img src={stop} alt="FixBike" />
              </div>
              <p>Seu destino final</p>
            </div>
          </div>

          <Map google={this.props.google}
            zoom={17}
            initialCenter={{
              lat: -8.0619064,
              lng: -34.8726426
            }}>
            <Polyline
            path={triangleCoords}
            strokeColor="#ff9818"
            strokeOpacity={0.8}
            strokeWeight={8} />

            <Marker
              name={'Oficina de Manutenção'}
              icon={{
                url: "/icon-fix-bike.png",
              }} 
              position={{lat: -8.055327, lng: -34.871927}}
              onClick={this.onMarkerClick} />


              <Marker
              name={'Bicicletário Museu Militar do Forte do Brum'}
              icon={{
                url: "/icon-park-bike.png",
              }} 
              position={{lat: -8.053457, lng: -34.871465}}
              onClick={this.onMarkerClick} />

              <Marker
              name={'Bicicletário Apolo 235'}
              icon={{
                url: "/icon-park-bike.png",
              }} 
              position={{lat: -8.060372, lng: -34.872409}}  onClick={this.onMarkerClick} />

              
              <Marker
              name={'Seu Destino'}
              position={{lat: -8.053064, lng: -34.871645}} onClick={this.onMarkerClick} />

              <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
                <div>
                  <p className="fontStyleInfos">{this.state.selectedPlace.name}</p>
                </div>
            </InfoWindow>         
    
          </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCoWYzM00B9-cO6wgi-Xi2atjin216lIS0')
})(App)