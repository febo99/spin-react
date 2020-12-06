import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MenuBar.module.css';
import {AppBar,Toolbar, MenuItem, Button, Menu} from '@material-ui/core';
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
        <AppBar position='static'>
          <Toolbar>
            <Button color="inherit" id='municipality' aria-controls="municipality-menu" aria-haspopup="true" onClick={this.handleClick}>Obcine</Button>
            <MenuMunicipalities anchorEl={anchorEl} handleClose={this.handleClose} muniChange={this.props.muniChange} muniChangeAll={this.props.muniChangeAll} municipalities={this.props.municipalities}></MenuMunicipalities>
            <MenuInterventions anchorEl={anchorEl} handleClose={this.handleClose}></MenuInterventions>
            <Button color="inherit" id='interventions' aria-controls="interventions-menu" aria-haspopup="true" onClick={this.handleClick}>Intervencije</Button>
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
  muniChange: PropTypes.func
};

MenuBar.defaultProps = {};

export default MenuBar;
