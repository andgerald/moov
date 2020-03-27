import React, { Component } from "react";
import "./welcome.css";
import Logo from "../assets/img/logoMoov.png";
import {Link}from "react-router-dom";

class Welcome extends Component {
  render() {
    return (
      <div className="section_">
        <img className="imgCustom" alt="Logo" src={Logo} />
        <Link to="/Inicio">
        <button className="button_">Entrar</button>
        </Link>
      </div>
    );
  }
}

export default Welcome;
