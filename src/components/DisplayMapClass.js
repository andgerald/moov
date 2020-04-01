import React from "react";
import house from "../assets/img/location-mark.png";
import data from "../data.json";
import restaurant from "../assets/img/restaurante.png";
import hoteles from "../assets/img/hoteles.png";
import museos from "../assets/img/museos.png";
import turismoAventura from "../assets/img/turismoAventura.png";
import playasBalnearios from "../assets/img/playaBalnearios.png";
import parques from "../assets/img/parques.png";

export default class DisplayMapClass extends React.Component {
  mapRef = React.createRef();

  state = {
    // The map instance to use during cleanup
    map: null,
    latitude: null,
    longitude: null
  };

  componentDidMount() {
    const H = window.H;
    const platform = new H.service.Platform({
      apikey: "lDvYLGl_ScztQ8kGSAPEe3iuTPyFsugnTu-Pj9z2E2U"
    });

    const defaultLayers = platform.createDefaultLayers();

    // Create an instance of the map
    const map = new H.Map(
      this.mapRef.current,
      defaultLayers.vector.normal.map,
      {
        // This map is centered over Europe
        center: { lat: 0, lng: 0 },
        zoom: 4,
        pixelRatio: window.devicePixelRatio || 1
      }
    );

    // MapEvents enables the event system
    // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
    // This variable is unused and is present for explanatory purposes
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // Create the default UI components to allow the user to interact with them
    // This variable is unused
    const ui = H.ui.UI.createDefault(map, defaultLayers);

    this.setState({ map });

    setTimeout(() => {
      this.getMyLocation();
      this.addMarkersToMap();
    }, 500);
  }

  // FUNCION QUE OBTIENE LA LOCALIZACION
  getMyLocation() {
    const location = window.navigator && window.navigator.geolocation;
    if (location) {
      location.getCurrentPosition(
        position => {
          this.state.map.setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          this.state.map.setZoom(13);

          const customMarkerIcon = `
          <div> 
          <img style='width: 40px; 'src='${house}'/> 
          <p>Mi Ubicación</p>
          </div>`;
          const icon = new window.H.map.DomIcon(customMarkerIcon),
            coords = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            },
            marker = new window.H.map.DomMarker(coords, { icon: icon });

          this.state.map.addObject(marker);
        },
        error => {
          this.setState({
            latitude: "err-latitude",
            longitude: "err-longitude"
          });
        }
      );
    }
  }

  addMarkersToMap() {
    data.map(element => {
      let view = "";
      switch (element.type) {
        case "Restaurantes":
          view = restaurant;
          break;
        case "Hoteles":
          view = hoteles;
          break;
        case "Museos":
          view = museos;
          break;
        case "Turismo Aventura":
          view = turismoAventura;
          break;
        case "Playas y Balnearios":
          view = playasBalnearios;
          break;
        case "Parques y Plazas":
          view = parques;
          break;
      }

      const customMarkerIcon = `
            <div> 
            <img style='width: 30px; 'src='${view}'/> 
            </div>`;
      const icon = new window.H.map.DomIcon(customMarkerIcon),
        coords = { lat: element.location.lat, lng: element.location.lng },
        marker = new window.H.map.DomMarker(coords, { icon: icon });

      this.state.map.addObject(marker);
    });

  }


  componentWillUnmount() {
    // Cleanup after the map to avoid memory leaks when this component exits the page
    this.state.map.dispose();
  }

  render() {
    return (
      // Set a height on the map so it will display

      <div ref={this.mapRef} style={{ height: "100vh" }} />
    );
  }
}
