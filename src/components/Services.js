import React, { Component } from "react";
import "../assets/css/services.css";
import ListServices from "./ListServices";

class Category extends Component {
  constructor() {
    super();
    this.state = {
      activePage: 0,
      typePage: ''
    };
  }

  changeState = (numero, type) => {
    this.setState({
      activePage: numero,
      typePage: type
      
    });
  };

  render() {
    if (this.state.activePage === 0) {
        return (
          <div>
            <p className="titleServices">Services</p>
            <div className="sectionServices">
              <div onClick={() => this.changeState(1, 'Restaurantes')} className="itemServices" id="restaurants">Restaurantes</div>
              <div onClick={() => this.changeState(2, 'Hoteles')} className="itemServices" id="hotels">Hoteles</div>
              <div onClick={() => this.changeState(3, 'Museos')} className="itemServices" id="museums">Museos</div>
              <div onClick={() => this.changeState(4, 'Turismo Aventura')} className="itemServices" id="adventure">Turismo Aventura</div>
              <div onClick={() => this.changeState(5, 'Playas y Balnearios')} className="itemServices" id="beach">Playas y Balnearios</div>
              <div onClick={() => this.changeState(6, 'Parques y Plazas')}className="itemServices" id="park">Parques y Plazas</div> 
          </div>
          </div>
        );
      } else {
         return <ListServices type={this.state.typePage}/>
      }  
    }
}

export default Category;
