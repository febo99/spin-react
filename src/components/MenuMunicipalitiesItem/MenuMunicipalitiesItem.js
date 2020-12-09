import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MenuMunicipalitiesItem.module.css';

class MenuMunicipalitiesItem extends Component{

  changeState(item){
    this.props.changeState(item);
  }

  render(){
    return(
      <div className={styles.MenuMunicipalitiesItem} >
        <label>
          <input className={styles.Checkbox} type='checkbox' id={this.props.id} style={{'backgroundColor':'#121212', 'color':'white'}} onChange={this.changeState.bind(this)} checked={this.props.muniState} inputProps={{ 'arialabel': 'primary checkbox' }}/>{this.props.muniName}
          <div className={styles.CustomCheckbox}/>
          </label>
      </div>
    );
  }
}


MenuMunicipalitiesItem.propTypes = {
  muniState: PropTypes.bool,
  muniName: PropTypes.string,
  changeState: PropTypes.func,
  id: PropTypes.string
};

MenuMunicipalitiesItem.defaultProps = {};

export default MenuMunicipalitiesItem;
