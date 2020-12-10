import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MenuItem, Menu, Checkbox} from '@material-ui/core'
import MenuInterventionsItem from '../MenuInterventionsItem/MenuInterventionsItem';
import styles from './MenuInterventions.module.css';

class MenuInterventions extends Component{
  names = ['NARAVNE NESREČE', 'DRUGE NESREČE', 'NESREČE V PROMETU', 'POŽAR,EKSPLOZIJA', 'ONESNAŽENJA, NESREČE Z NEVARNIMI SNOVMI'
    ,'JEDRSKI IN DRUGI DOGODKI', 'NAJDBE NUS, MOTNJE OSKRBE IN POŠKODBE OBJEKTOV', 'TEHNIČNA IN DRUGA POMOČ', 'VEČJI OBSEG']

    changeAll(){
      this.props.interventionChangeAll();
    }
    
    renderItems(){
      return Object.keys(this.props.intervetions).map((item, index) => {
        if(item !== 'checkedAll')return <MenuInterventionsItem id={item} changeState={this.props.interventionChange} muniState={this.props.intervetions[item]} muniName={this.names[index]}></MenuInterventionsItem>
        return null;
      })}

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
                <MenuInterventionsItem  changeState={this.changeAll.bind(this)} muniState={this.props.intervetions.checkedAll} muniName={"IZBERI VSE"}></MenuInterventionsItem>
                {this.renderItems()}
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
