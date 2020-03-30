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
              <div onClick={() => this.changeState(1, 'Restaurantes')} className="itemServices">Restaurantes</div>
              <div onClick={() => this.changeState(1, 'Hoteles')} className="itemServices">Hoteles</div>
              <div onClick={() => this.changeState(1, 'Museos')} className="itemServices">Museos</div>
              <div onClick={() => this.changeState(1, 'Turismo Aventura')} className="itemServices">Turismo Aventura</div>
              <div onClick={() => this.changeState(1, 'Playas y Balnearios')} className="itemServices">
                Playas y Balnearios
              </div>
              <div onClick={() => this.changeState(1, 'Parques y Plazas')}className="itemServices">Parques y Plazas</div>
              <div className="itemServices">Otros</div>
            </div>
         </div>
        );
      } else {
         return <ListServices type={this.state.typePage}/>
      }
  }
}

export default Category;
