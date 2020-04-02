import React, { Component } from 'react';
import '../pages/home.css';


class Home extends Component {
    render() {
        return (
            <div className="homeCategories">
                    <div className="row-home">
                        <div onClick={()=>this.props.changeState(1)} className="column-home" id="home-map">
                          <p>Mapa</p>
                        </div>
                        <div onClick={()=>this.props.changeState(2)} className="column-home" id="home-services">
                          <p>Servicios</p>    
                        </div>
                    </div>
                    <div className="row-home">
                        <div onClick={()=>this.props.changeState(3)} className="column-home" id="home-favorits">
                          <p>Favoritos</p>    
                        </div>
                        <div className="column-home" id="home-about">
                          <p>Transporte</p>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Home;