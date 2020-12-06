import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MenuItem, Menu, Checkbox} from '@material-ui/core'
import styles from './MenuInterventions.module.css';

class MenuInterventions extends Component{
  names = ['NARAVNE NESREČE', 'DRUGE NESREČE', 'NESREČE V PROMETU', 'POŽAR,EKSPLOZIJA', 'ONESNAŽENJA, NESREČE Z NEVARNIMI SNOVMI'
    ,'JEDRSKI IN DRUGI DOGODKI', 'NAJDBE NUS, MOTNJE OSKRBE IN POŠKODBE OBJEKTOV', 'TEHNIČNA IN DRUGA POMOČ', 'VEČJI OBSEG']



  render(){
  return(
      <Menu
            id="interventionsMenu"
            anchorEl={this.props.anchorEl}
            keepMounted
            classes={{ list: styles.menuPaper }}
            open={Boolean(this.props.anchorEl ? this.props.anchorEl.id === 'interventions' : false)}
            onClose={this.props.handleClose}
            >
                <MenuItem style={{'backgroundColor':'#121212', 'color':'white'}} onClick={this.props.interventionChangeAll}>
                  <Checkbox
                  style={{'color':'white'}}
                  checked={this.props.intervetions.checkedAll}
                  inputProps={{ 'arialabel': 'primary checkbox' }}
                  />Izberi vse
                  </MenuItem>
                {
                Object.keys(this.props.intervetions).map((item,i) => {
                  if(item !== 'checkedAll')return <MenuItem style={{'backgroundColor':'#121212', 'color':'white'}} id={item} key={i} onClick={this.props.interventionChange}><Checkbox style={{'color':'white'}} id={item} name={item} checked={this.props.intervetions[item]} inputProps={{ 'arialabel': 'primary checkbox' }}></Checkbox>{this.names[i]}</MenuItem>
                  return null
                })}
            </Menu>
            );
          }
}

MenuInterventions.propTypes = {
  anchorEl: PropTypes.object,
  handleClose: PropTypes.func,
  interventionChange: PropTypes.func,
  interventionChangeAll: PropTypes.func,
  intervetions: PropTypes.object
};

MenuInterventions.defaultProps = {};

export default MenuInterventions;
