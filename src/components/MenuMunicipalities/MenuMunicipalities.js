import React, { Component } from 'react';
import { MenuItem, Menu, Checkbox} from '@material-ui/core'
import styles from './MenuMunicipalities.module.css';
import PropTypes from 'prop-types';
let i = 0;
class MenuMunicipalities extends Component{
  names = ['Ajdovščina','Ankaran','Apače','Beltinci','Benedikt','Bistrica Ob Sotli','Bled','Bloke','Bohinj','Borovnica','Bovec','Braslovče','Brda','Brezovica','Brežice','Cankova','Celje','Cerklje Na Gorenjskem','Cerknica','Cerkno','Cerkvenjak','Cirkulane','Destrnik','Divača','Dobje','Dobrepolje','Dobrna','Dobrova-polhov Gradec','Dobrovnik','Dol Pri Ljubljani','Dolenjske Toplice','Domžale','Dornava','Dravograd','Duplek','Gorenja Vas-poljane','Gorišnica','Gorje','Gornja Radgona','Gornji Grad','Gornji Petrovci','Grad','Grosuplje','Hajdina','Hodoš','Horjul','Hoče-slivnica','Hrastnik','Hrpelje-kozina','Idrija','Ig','Ilirska Bistrica','Ivančna Gorica','Izola','Jesenice','Jezersko','Juršinci','Kamnik','Kanal','Kidričevo','Kobarid','Kobilje','Komen','Komenda','Koper','Kostanjevica Na Krki','Kostel','Kozje','Kočevje','Kranj','Kranjska Gora','Križevci','Krško','Kungota','Kuzma','Laško','Lenart','Lendava','Litija','Ljubljana','Ljubno','Ljutomer','Log-dragomer','Logatec','Lovrenc Na Pohorju','Loška Dolina','Loški Potok','Lukovica','Luče','Majšperk','Makole','Maribor','Markovci','Medvode','Mengeš','Metlika','Mežica','Miklavž Na Dravskem Polju','Miren-kostanjevica','Mirna','Mirna Peč','Mislinja','Mokronog-trebelno','Moravske Toplice','Moravče','Murska Sobota','Muta','Naklo','Nazarje','Nova Gorica','Novo Mesto','Odranci','Oplotnica','Ormož','Osilnica','Pesnica','Piran','Pivka','Podlehnik','Podvelka','Podčetrtek','Poljčane','Polzela','Postojna','Prebold','Preddvor','Prevalje','Ptuj','Puconci','Radenci','Radeče','Radlje Ob Dravi','Radovljica','Ravne Na Koroškem','Razkrižje','Rače-fram','Renče-vogrsko','Rečica Ob Savinji','Ribnica','Ribnica Na Pohorju','Rogatec','Rogaška Slatina','Rogašovci','Ruše','Selnica Ob Dravi','Semič','Sevnica','Sežana','Slovenj Gradec','Slovenska Bistrica','Slovenske Konjice','Sodražica','Solčava','Središče Ob Dravi','Starše','Straža','Sv. Trojica V Slov. Goricah','Sveta Ana','Sveti Andraž V Slov. Goricah','Sveti Jurij Ob Ščavnici','Sveti Jurij V Slov. Goricah','Sveti Tomaž','Tabor','Tišina','Tolmin','Trbovlje','Trebnje','Trnovska Vas','Trzin','Tržič','Turnišče','Velenje','Velika Polana','Velike Lašče','Veržej','Videm','Vipava','Vitanje','Vodice','Vojnik','Vransko','Vrhnika','Vuzenica','Zagorje Ob Savi','Zavrč','Zreče','Črenšovci','Črna Na Koroškem','Črnomelj','Šalovci','Šempeter-vrtojba','Šentilj','Šentjernej','Šentjur','Šentrupert','Šenčur','Škocjan','Škofja Loka','Škofljica','Šmarje Pri Jelšah','Šmarješke Toplice','Šmartno Ob Paki','Šmartno Pri Litiji','Šoštanj','Štore','Žalec','Železniki','Žetale','Žiri','Žirovnica','Žužemberk']

  checkedAll = this.props.municipalities.checkedAll;
  
  render(){
    console.log(this.props)
    return(
      <Menu
            id="municipalitymenu"
            anchorEl={this.props.anchorEl}
            keepMounted
            open={Boolean(this.props.anchorEl ? this.props.anchorEl.id === 'municipality' : false)}
            onClose={this.props.handleClose}
            >
                <MenuItem onClick={this.props.muniChangeAll}>
                  <Checkbox
                  checked={this.props.municipalities.checkedAll}
                  inputProps={{ 'arialabel': 'primary checkbox' }}
                  />Izberi vse
                  </MenuItem>
                {
                Object.keys(this.props.municipalities).map((item, index) => {
                  if(item !== 'checkedAll')return <MenuItem id={item} key={index} onClick={this.props.muniChange}><Checkbox id={item} name={item} checked={this.props.municipalities[item]} inputProps={{ 'arialabel': 'primary checkbox' }}></Checkbox>{this.names[index]}</MenuItem>
                })}
            </Menu>
            );
              }
            }
MenuMunicipalities.propTypes = {
  anchorEl: PropTypes.object,
   handleClose: PropTypes.func,
   muniChange: PropTypes.func,
   muniChangeAll: PropTypes.func,
   municipalities: PropTypes.object
};

MenuMunicipalities.defaultProps = {};

export default MenuMunicipalities;
