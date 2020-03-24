import React from "react";
import house from '../assets/img/house.svg'

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
      apikey: "gdzIqywx5WpI4vRv69OuLS2U62NAWbpT83Q7Bmg7KOU"
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
    this.getMyLocation();
  }
  // FUNCION QUE OBTIENE LA LOCALIZACION 
  getMyLocation() {
    const location = window.navigator && window.navigator.geolocation;
    if (location) {
      location.getCurrentPosition(
        position => {
          this.state.map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude })
          this.state.map.setZoom(17)

          const customMarkerIcon = `
          <div> 
          <img style='width: 50px; 'src='${house}'/> </br>
          <h3>Mi Casa</h3>
          </div>`;
          const icon = new window.H.map.DomIcon(customMarkerIcon), 
          coords = { lat: position.coords.latitude, lng: position.coords.longitude },
          marker = new window.H.map.DomMarker(coords, {icon: icon});

          // const myMarket = new window.H.map.Marker({lat: position.coords.latitude, lng: position.coords.longitude});
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

