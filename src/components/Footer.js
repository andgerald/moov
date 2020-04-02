import React from 'react';
import '../assets/css/footer.css';
import Favorite from '../assets/img/favorite-icon.png';
import Map from '../assets/img/map-icon.png'
import HomeIcon from '../assets/img/home-icon.png';

class SiteFooter extends React.Component {
    render() {
        return (
            <div className='footerDiv'>
                <footer>
                <div className="row">
                        {/* pasamos por nombre de la props, la funcion changeState */}
                        <div onClick={()=>this.props.changeState(0)} className="column-1-of-3">
                          <div className="footerBox">
                            <img className="footerIcon" alt="home" src={HomeIcon} />
                          </div>
                        </div>
                        <div onClick={()=>this.props.changeState(4)} className="column-2-of-3">
                            <div className="footerBox">
                            <img className="footerIcon" alt="favorite" src={Favorite} /> 
                            </div>
                        </div>
                        <div onClick={()=> this.props.changeState(1)} className="column-3-of-3">
                            <div className="footerBox">
                            <img className="footerIcon" alt="map" src={Map} /> 
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default SiteFooter;