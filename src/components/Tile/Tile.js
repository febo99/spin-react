import React from 'react';
import styles from './Tile.module.css';
import PropTypes from 'prop-types';
import Map from '../../map.svg';

class Tile extends React.Component{
  render(){
    return(
    <div className={styles.Tile}>
      <div className={styles.TileHeader}>
        <div className={styles.TileHeaderText}>
          <h1 id={styles.TileType}>{this.props.type}</h1>
          <h1 id={styles.TileTime}>{this.props.time}</h1>
          <h2 id={styles.TileLocation}>{this.props.location}</h2>
        </div>
        <div className={styles.TileMapIcon}>
          <a target='_blank' rel='noreferrer' href={this.props.mapLink}><img alt='Map' src={Map}></img></a>
      </div>
      </div>

      <div className={styles.TileContent}>
        <p>
        {this.props.content}
        </p>
      </div>
    </div>
    );
  }
}
Tile.propTypes = {
  type: PropTypes.string,
  time: PropTypes.string,
  location: PropTypes.string,
  content: PropTypes.string,
  mapLink: PropTypes.string
};

Tile.defaultProps = {};

export default Tile;
