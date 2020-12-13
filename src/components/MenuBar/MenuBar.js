import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MenuBar.module.css';
import {AppBar,Toolbar, Button} from '@material-ui/core';
import MenuMunicipalities from '../MenuMunicipalities/MenuMunicipalities';
import MenuInterventions from '../MenuInterventions/MenuInterventions';


class MenuBar extends Component{
  state = {
    anchorEl: null,
    checkedAll: false,
}

handleClick = event =>{
  this.setState({ anchorEl: event.currentTarget })
} 



handleClose = () => this.setState({ anchorEl: null})

  render(){
    const {anchorEl } = this.state;
    return(
      <div className={styles.MenuBar}>
        <AppBar position='static' style={{'backgroundColor':'#121212'}}>
          <Toolbar>
            <Button color="inherit" id='municipality' aria-controls="municipality-menu" aria-haspopup="true" onClick={this.handleClick}>Občine</Button>
            <Button color="inherit" id='interventions' aria-controls="interventions-menu" aria-haspopup="true" onClick={this.handleClick}>Intervencije</Button>
            <Button color="inherit" id="mapToggle" onClick={this.props.mapChange}>Zemljevid</Button>
            <MenuMunicipalities  anchorEl={anchorEl}  handleClose={this.handleClose} muniChange={this.props.muniChange} muniChangeAll={this.props.muniChangeAll} municipalities={this.props.municipalities}></MenuMunicipalities>
            <MenuInterventions anchorEl={anchorEl} handleClose={this.handleClose} interventionChange={this.props.interventionChange} interventionChangeAll={this.props.interventionChangeAll} intervetions={this.props.intervetions}></MenuInterventions>
          </Toolbar>
        </AppBar>
    </div>
    );
  }
}


MenuBar.propTypes = {
  interventionsType: PropTypes.object,
  municipalities: PropTypes.object,
  muniChangeAll: PropTypes.func,
  muniChange: PropTypes.func,
  interventionChange: PropTypes.func,
  interventionChangeAll: PropTypes.func,
  intervetions: PropTypes.object,
  mapChange: PropTypes.func
};

MenuBar.defaultProps = {};

export default MenuBar;
