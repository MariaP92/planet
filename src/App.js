import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "redux-zero/react";
import { Showplanet } from "./actions";
import Planet from "./IMG/planet.jpg";

const PlanetInfor = ({ title, distance, discover, telescope }) => {
  return (
    <li>
      <div className="container-fluid containInfo">
        <div className="row">
          <div className="col-md-12">
            <img className="sizeIMG" src={Planet} />
            <h3>{title}</h3>
            <p>{distance} Lightyears away</p>
            <p>Discovered in {discover} with {telescope}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

const Header = () => {
  return (
    <div className="Header">
      <h1 className="text-center">EXOPLANET EXPLORER</h1>
    </div>
  );
}

const App = ({ items }) => {
  const Planet = items.map((planetInfo, index) => {
    return (
      <PlanetInfor
        key={index}
        title={planetInfo.pl_name}
        distance={planetInfo.dec}
        discover={planetInfo.pl_disc}
        telescope={planetInfo.pl_telescope}
      />
    );
  });
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center">
            <button className="btnShow" onClick={() => Showplanet()}>Show Planet</button>
            <div className="list text-center">
              {items.length != 0 ?
                <ul>
                  {Planet}
                </ul>
                :
                <br />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}


const mapToProps = ({ items }) => ({ items });

export default connect(mapToProps)(App);