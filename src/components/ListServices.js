import React, { Component, Fragment } from "react";
import data from "../data.json";
import "../assets/css/listServices.css";
import StarRatings from "react-star-ratings";

class ListServices extends Component {
  constructor() {
    super();
    this.state = {
      data: data
    };
  }

  componentDidMount = () => {
    let listaFiltrada = data.filter(element => {
      return element.type === this.props.Type;
    });

    this.setState({
      data: listaFiltrada
    });
  };

  render() {
    // Mapea y muestra cada uno de los elementos del array
    return (
      <Fragment>
        <div className="type">
          <p>Servicios > {this.props.type}</p>
        </div>
        <div className="container_">
          {this.state.data.map(current => {
            return (
              <div className="elementos_" id="elementos_" key={current.id}>
                <img alt="itemImg" className="itemImg" src={`${current.img}`} />
                <h1 className="name">{current.name}</h1>
                <StarRatings
                  starDimension={"25px"}
                  starSpacing={"1px"}
                  rating={current.accessibility}
                  starRatedColor="#e7711a"
                  changeRating={null}
                  numberOfStars={5}
                  name="rating"
                />
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default ListServices;
