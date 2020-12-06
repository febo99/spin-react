import './App.css';
import Tile from './components/Tile/Tile';
import MenuBar from './components/MenuBar/MenuBar';
import { Component } from 'react';

const formatDate = (data) =>{
  data.forEach((item) =>{
    item.nastanekCas = (new Date(item.nastanekCas).toLocaleString("sl-SL").replace(". ", ".").replace(". ", "."));
    item.map = 'https://www.google.com/maps/place/' + item.wgsLat + ',' + item.wgsLon ;
  })
  return data;
}


class App extends Component{
  state ={
    intervetions : [],
    intervetionsFilter : {
      naravneNesrece: true,
      drugeNesrece: true,
      prometne: true,
      pozari: true,
      nevarne: true,
      jedrski: true,
      nus: true,
      tehnicna: true,
      checkedAll: true,
    },
    
    municipalitiesFilter :{
      ajdovscina: true,
      ankaran: true,
      apace: true,
      beltinci: true,
      benedikt: true,
      bistricaObSotli: true,
      bled: true,
      bloke: true,
      bohinj: true,
      borovnica: true,
      bovec: true,
      braslovce: true,
      brda: true,
      brezovica: true,
      brezice: true,
      cankova: true,
      celje: true,
      cerkljeNaGorenjskem: true,
      cerknica: true,
      cerkno: true,
      cerkvenjak: true,
      cirkulane: true,
      destrnik: true,
      divaca: true,
      dobje: true,
      dobrepolje: true,
      dobrna: true,
      dobrovaPolhovGradec: true,
      dobrovnik: true,
      dolPriLjubljani: true,
      dolenjskeToplice: true,
      domzale: true,
      dornava: true,
      dravograd: true,
      duplek: true,
      gorenjaVasPoljane: true,
      gorisnica: true,
      gorje: true,
      gornjaRadgona: true,
      gornjiGrad: true,
      gornjiPetrovci: true,
      grad: true,
      grosuplje: true,
      hajdina: true,
      hodos: true,
      horjul: true,
      hoceSlivnica: true,
      hrastnik: true,
      hrpeljeKozina: true,
      idrija: true,
      ig: true,
      ilirskaBistrica: true,
      ivancnaGorica: true,
      izola: true,
      jesenice: true,
      jezersko: true,
      jursinci: true,
      kamnik: true,
      kanal: true,
      kidricevo: true,
      kobarid: true,
      kobilje: true,
      komen: true,
      komenda: true,
      koper: true,
      kostanjevicaNaKrki: true,
      kostel: true,
      kozje: true,
      kocevje: true,
      kranj: true,
      kranjskaGora: true,
      krizevci: true,
      krsko: true,
      kungota: true,
      kuzma: true,
      lasko: true,
      lenart: true,
      lendava: true,
      litija: true,
      ljubljana: true,
      ljubno: true,
      ljutomer: true,
      logDragomer: true,
      logatec: true,
      lovrencNaPohorju: true,
      loskaDolina: true,
      loskiPotok: true,
      lukovica: true,
      luce: true,
      majsperk: true,
      makole: true,
      maribor: true,
      markovci: true,
      medvode: true,
      menges: true,
      metlika: true,
      mezica: true,
      miklavzNaDravskemPolju: true,
      mirenKostanjevica: true,
      mirna: true,
      mirnaPec: true,
      mislinja: true,
      mokronogTrebelno: true,
      moravskeToplice: true,
      moravce: true,
      murskaSobota: true,
      muta: true,
      naklo: true,
      nazarje: true,
      novaGorica: true,
      novoMesto: true,
      odranci: true,
      oplotnica: true,
      ormoz: true,
      osilnica: true,
      pesnica: true,
      piran: true,
      pivka: true,
      podlehnik: true,
      podvelka: true,
      podcetrtek: true,
      poljcane: true,
      polzela: true,
      postojna: true,
      prebold: true,
      preddvor: true,
      prevalje: true,
      ptuj: true,
      puconci: true,
      radenci: true,
      radece: true,
      radljeObDravi: true,
      radovljica: true,
      ravneNaKoroskem: true,
      razkrizje: true,
      racefram: true,
      rencevogrsko: true,
      recicaObSavinji: true,
      ribnica: true,
      ribnicaNaPohorju: true,
      rogatec: true,
      rogaskaSlatina: true,
      rogasovci: true,
      ruse: true,
      selnicaObDravi: true,
      semic: true,
      sevnica: true,
      sezana: true,
      slovenjGradec: true,
      slovenskaBistrica: true,
      slovenskeKonjice: true,
      sodrazica: true,
      solcava: true,
      sredisceObDravi: true,
      starse: true,
      straza: true,
      svTrojicaVSlovGoricah: true,
      svetaAna: true,
      svetiAndrazVSlovGoricah: true,
      svetiJurijObScavnici: true,
      svetiJurijVSlovGoricah: true,
      svetiTomaz: true,
      tabor: true,
      tisina: true,
      tolmin: true,
      trbovlje: true,
      trebnje: true,
      trnovskaVas: true,
      trzin: true,
      trzic: true,
      turnisce: true,
      velenje: true,
      velikaPolana: true,
      velikeLasce: true,
      verzej: true,
      videm: true,
      vipava: true,
      vitanje: true,
      vodice: true,
      vojnik: true,
      vransko: true,
      vrhnika: true,
      vuzenica: true,
      zagorjeObSavi: true,
      zavrc: true,
      zrece: true,
      crensovci: true,
      crnaNaKoroskem: true,
      crnomelj: true,
      salovci: true,
      sempetervrtojba: true,
      sentilj: true,
      sentjernej: true,
      sentjur: true,
      sentrupert: true,
      sencur: true,
      skocjan: true,
      skofjaLoka: true,
      skofljica: true,
      smarjePriJelsah: true,
      smarjeskeToplice: true,
      smartnoObPaki: true,
      smartnoPriLitiji: true,
      sostanj: true,
      store: true,
      zalec: true,
      zelezniki: true,
      zetale: true,
      ziri: true,
      zirovnica: true,
      zuzemberk: true,
      checkedAll: true,
    }
  }

  handleMuniChange(item) {
    const id = item.target.id;
    const newState = this.state.municipalitiesFilter;
    newState[id] = item.target.checked;
    this.setState(newState);
  };
  
  handleMuniChangeAll(){
    const newState = this.state.municipalitiesFilter;
    const checked = this.state.municipalitiesFilter.checkedAll;
   Object.keys(this.state.municipalitiesFilter).forEach((key)=> newState[key] = !checked);
   this.setState(newState);
  };
  
  update(){ this.handleChange.bind(this)};
  componentDidMount(){
    const api = 'http://spin3.sos112.si/javno/assets/data/lokacija.json';
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    fetch(proxy + api, {cors: 'no-cors'}).then((response) => response.json())
      .then(d => {
          const finalItems = formatDate(d.value);
          this.setState({ intervetions: finalItems });
      });
    this.interval = setInterval(() =>{
      fetch(proxy + api).then((response) => response.json())
      .then(d => {
          const finalItems = formatDate(d.value);
          this.setState({ intervetions: finalItems });
      });
    }, 60000);
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 id="App-h1">SPIN 112</h1>
          <MenuBar municipalities={this.state.municipalitiesFilter} muniChange={this.handleMuniChange.bind(this)} muniChangeAll={this.handleMuniChangeAll.bind(this)} intervetionsType={this.state.intervetionsFilter}></MenuBar>
          <div className="App-content">
            {this.state.intervetions.map((d) => {
              return <Tile key={d.nastanekCas} type={d.intervencijaVrstaNaziv} 
              time={d.nastanekCas} 
              location={d.obcinaNaziv}
              content={d.besedilo}
              mapLink={d.map}></Tile>
            })}
          </div>
        </header>

      </div>
    );
  }
}

export default App;
