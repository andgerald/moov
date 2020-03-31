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
                        <div className="column-1-of-3">
                          <div onClick={()=>this.props.changeState(1)} className="footerBox">
                            <img className="footerIcon" alt="home" src={HomeIcon} />
                          </div>
                        </div>
                        <div className="column-2-of-3">
                            <div onClick={()=>this.props.changeState(1)} className="footerBox">
                            <img className="footerIcon" alt="favorite" src={Favorite} /> 
                            </div>
                        </div>
                        <div className="column-3-of-3">
                            <div onClick={()=>this.props.changeState(1)} className="footerBox">
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