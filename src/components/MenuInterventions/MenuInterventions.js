import React from 'react';
import { MenuItem, Menu, Checkbox} from '@material-ui/core'
import styles from './MenuInterventions.module.css';

function MenuInterventions({anchorEl, handleClose}){
  const names = ['NARAVNE NESREČE', 'DRUGE NESREČE', 'NESREČE V PROMETU', 'POŽAR,EKSPLOZIJA', 'ONESNAŽENJA, NESREČE Z NEVARNIMI SNOVMI'
    ,'JEDRSKI IN DRUGI DOGODKI', 'NAJDBE NUS, MOTNJE OSKRBE IN POŠKODBE OBJEKTOV', 'TEHNIČNA IN DRUGA POMOČ']
  const [state, setState] = React.useState({
    naravneNesrece: true,
    drugeNesrece: true,
    prometne: true,
    pozari: true,
    nevarne: true,
    jedrski: true,
    nus: true,
    tehnicna: true,
    checkedAll: true,
  });


  const handleChange = React.useCallback((item) => {
    const id = item.target.id;
    state[id] = !state[id];
    setState({...state});
  },[]);
  
  const handleChangeAll = React.useCallback(() =>{
   Object.keys(state).forEach((key)=> state[key] = !state.checkedAll)
    setState({...state});
  },[]);
  
  const update = handleChange.bind(this);
  const { checkedAll } = state;
  let i = 0;
  return(
      <Menu
            id="interventionsMenu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl ? anchorEl.id === 'interventions' : false)}
            onClose={handleClose}
            >
                <MenuItem onClick={handleChangeAll}>
                  <Checkbox
                  checked={checkedAll}
                  inputProps={{ 'arialabel': 'primary checkbox' }}
                  />Izberi vse
                  </MenuItem>
                {
                Object.keys(state).map((item) => {
                  if(item !== 'checkedAll')return <MenuItem id={item} key={i} onClick={update}><Checkbox id={item} name={item} checked={state[item]} inputProps={{ 'arialabel': 'primary checkbox' }}></Checkbox>{names[i++]}</MenuItem>
                })}
            </Menu>
            );
}

MenuInterventions.propTypes = {};

MenuInterventions.defaultProps = {};

export default MenuInterventions;
