import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MenuBar.module.css';
import {AppBar,Toolbar, MenuItem, Button, Menu} from '@material-ui/core';
import MenuMunicipalities from '../MenuMunicipalities/MenuMunicipalities';


class MenuBar extends Component{
  state = {
    anchorEl: null,
    checkedAll: false,
    municipalities: {maribor: true, ljubljana: false}
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
            <MenuMunicipalities anchorEl={anchorEl} handleClose={this.handleClose}></MenuMunicipalities>
            {/* <Menu
            id="interventions-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl ? anchorEl.id === 'interventions' : false)}
            onClose={this.handleClose}
            >
                <MenuItem onClick={this.handleClose}>Izberi vse</MenuItem>
                <MenuItem onClick={this.handleClose}>Pozar</MenuItem>
                <MenuItem onClick={this.handleClose}>Test</MenuItem>
            </Menu> */}
            <Button color="inherit" id='interventions' aria-controls="interventions-menu" aria-haspopup="true" onClick={this.handleClick}>Intervencije</Button>
          </Toolbar>
        </AppBar>
    </div>
    );
  }
}


MenuBar.propTypes = {};

MenuBar.defaultProps = {};

export default MenuBar;
