import React, { Component, Fragment } from 'react';
import '../assets/css/listServices.css';
import data from "../data.json";
import StarRatings from "react-star-ratings";
import { Modal } from "react-bootstrap";
import iconClose from '../assets/img/times-circle-solid.svg'

class Transport extends Component {

    constructor() {
        super();
        this.state = {
          data: data,
          modal: false, 
          target: {}
        };
      }
    
      handleCloseModal = () => {
        this.setState({
          modal: false
        });
      };
    
      handleShowModal = (current) => {
        this.setState({
          target: current,
          modal: true
        });
      };
    
      componentDidMount = () => {
        let listaFiltrada = data.filter(element => {
          return element.type === 'terminales y aeropuertos';
        });
    
        this.setState({
          data: listaFiltrada
        });
      };

    render() {
        return (
        <Fragment>
        <div className="type">
          <p>Servicios > Transporte  </p>
        </div>
        <div className="container_">
          {this.state.data.map(current => {
            return (
              <div
                onClick={() => this.handleShowModal(current)}
                className="elementos_"
                id="elementos_"
                key={current.id}
              >
                <img alt="itemImg" className="itemImg" src={`${current.img}`} />
                <h3 className="name">{current.name}</h3>
                <StarRatings
                  starDimension={"25px"}
                  starSpacing={"1px"}
                  rating={current.accessibility}
                  starRatedColor="#d59500"
                  changeRating={null}
                  numberOfStars={5}
                  name="rating"
                />
              </div>
            );
          })}
        </div>
          <>
          <Modal show={this.state.modal} onHide={() => this.handleCloseModal()} >
            <img alt="itemImg" className="imgModal" src={`${this.state.target.img}`} />
            <Modal.Header >
              <Modal.Title>{this.state.target.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body >
            <StarRatings
                  starDimension={"30px"}
                  starSpacing={"1px"}
                  rating={this.state.target.accessibility}
                  starRatedColor="#d59500"
                  changeRating={null}
                  numberOfStars={5}
                  name="rating"
                />
            </Modal.Body >
            <Modal.Body>
            <p><span>Clasificación:</span> {this.state.target.classification}</p>
            <p>{this.state.target.description}</p>
            <p><span>Dirección:</span> {this.state.target.address}</p>
            <p><span>Telefóno:</span> {this.state.target.phone}</p>
            <p><span>Contacto:</span> {this.state.target.contact}</p>
            <div style={{display:"flex",justifyContent:"flex-end"}} onClick={()=>this.handleCloseModal()}><img style={{width:"30px",height:"30px"}} src={iconClose}></img></div>
            </Modal.Body>
          </Modal >
        </>
      </Fragment>
        );
    }
}

export default Transport;