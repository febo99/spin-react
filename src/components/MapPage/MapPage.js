import {React,Component} from 'react';
import PropTypes from 'prop-types';
import styles from './MapPage.module.css';
import mapboxgl  from 'mapbox-gl';
import key from '../../tokens'

class MapPage extends Component {
  state = {
    lng: 14.8,
    lat: 46,
    zoom: 7.6
  }

  getColorValue(c){
    switch(c){
      case 0:
        return '#004ecc';
      case 1:
        return '#ff0000';
        
      case 2:
        return '#eba400';
      case 3:
        return '#ffd500';
      case 4:
        return  '#fff200';
      default:
        
    }
  }

  generatePopupText(data){
    const popuptext = data.besedilo ? data.besedilo : 'V teku';
    return `<div class='popup-text'>
        <h3>${data.nastanekCas}</h3>
        <h3>${data.obcinaNaziv}</h3>
        ${popuptext} 
      </div>`
  }

  componentDidMount(){
    mapboxgl.accessToken = key;
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/dark-v9?optimize=true',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
    map.dragRotate.disable();
    let marker;
    for(let i = 0; i < this.props.intervetions.length; i++){
      const intervention = this.props.intervetions[i]
      if('wgsLon' in intervention){
        const color = this.getColorValue(intervention.barva)
        marker = new mapboxgl.Marker({color})
        .setLngLat([intervention.wgsLon, intervention.wgsLat])
        .setPopup(new mapboxgl.Popup({offset:18,}).setHTML(this.generatePopupText(intervention)))
        .addTo(map)
                
      }

    }
  }
  render(){
    return(
      <div ref={el => this.mapContainer = el} className={styles.MapPage}></div>
    )
  }
}

MapPage.propTypes = {
  intervetions: PropTypes.array
};

MapPage.defaultProps = {};

export default MapPage;
