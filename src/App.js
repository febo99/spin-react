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
const formatDateLarge = (data) =>{
  data.forEach((item) =>{
    item.nastanekCas = (new Date(item.besediloList[0].datum).toLocaleString("sl-SL").replace(". ", ".").replace(". ", "."));
    item.intervencijaVrstaNaziv = "VEČJI OBSEG";
    item.besedilo = item.besediloList[0].besedilo;
    item.map = 'https://www.google.com/maps/place/' + item.obcinaNaziv;
  })
  return data;
}

class App extends Component{
  state ={
    intervetions : [],
    intervetionsFilter : {
      naravnenesrece: true,
      drugenesrece: true,
      prometnanesreca: true,
      pozareksplozija: true,
      onesnazenjenesreceznevarnimisnovmi: true,
      jedrskiindrugidogoki: true,
      najdbenusmotnjeoskrbeinposkodbeobjektov: true,
      tehnicnaindrugapomoc: true,
      vecjiobseg: true,
      checkedAll: true,
    },
    
    municipalitiesFilter :{
      ajdovscina: true,
      ankaran: true,
      apace: true,
      beltinci: true,
      benedikt: true,
      bistricaobsotli: true,
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
      cerkljenagorenjskem: true,
      cerknica: true,
      cerkno: true,
      cerkvenjak: true,
      cirkulane: true,
      destrnik: true,
      divaca: true,
      dobje: true,
      dobrepolje: true,
      dobrna: true,
      dobrovapolhovgradec: true,
      dobrovnik: true,
      dolpriljubljani: true,
      dolenjsketoplice: true,
      domzale: true,
      dornava: true,
      dravograd: true,
      duplek: true,
      gorenjavaspoljane: true,
      gorisnica: true,
      gorje: true,
      gornjaradgona: true,
      gornjigrad: true,
      gornjipetrovci: true,
      grad: true,
      grosuplje: true,
      hajdina: true,
      hodos: true,
      horjul: true,
      hoceslivnica: true,
      hrastnik: true,
      hrpeljekozina: true,
      idrija: true,
      ig: true,
      ilirskabistrica: true,
      ivancnagorica: true,
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
      kostanjevicanakrki: true,
      kostel: true,
      kozje: true,
      kocevje: true,
      kranj: true,
      kranjskagora: true,
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
      logdragomer: true,
      logatec: true,
      lovrencnapohorju: true,
      loskadolina: true,
      loskipotok: true,
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
      miklavznadravskempolju: true,
      mirenkostanjevica: true,
      mirna: true,
      mirnapec: true,
      mislinja: true,
      mokronogtrebelno: true,
      moravsketoplice: true,
      moravce: true,
      murskasobota: true,
      muta: true,
      naklo: true,
      nazarje: true,
      novagorica: true,
      novomesto: true,
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
      radljeobdravi: true,
      radovljica: true,
      ravnenakoroskem: true,
      razkrizje: true,
      racefram: true,
      rencevogrsko: true,
      recicaobsavinji: true,
      ribnica: true,
      ribnicanapohorju: true,
      rogatec: true,
      rogaskaslatina: true,
      rogasovci: true,
      ruse: true,
      selnicaobdravi: true,
      semic: true,
      sevnica: true,
      sezana: true,
      slovenjgradec: true,
      slovenskabistrica: true,
      slovenskekonjice: true,
      sodrazica: true,
      solcava: true,
      sredisceobdravi: true,
      starse: true,
      straza: true,
      svtrojicavslovgoricah: true,
      svetaana: true,
      svetiandrazvslovgoricah: true,
      svetijurijobscavnici: true,
      svetijurijvslovgoricah: true,
      svetitomaz: true,
      tabor: true,
      tisina: true,
      tolmin: true,
      trbovlje: true,
      trebnje: true,
      trnovskavas: true,
      trzin: true,
      trzic: true,
      turnisce: true,
      velenje: true,
      velikapolana: true,
      velikelasce: true,
      verzej: true,
      videm: true,
      vipava: true,
      vitanje: true,
      vodice: true,
      vojnik: true,
      vransko: true,
      vrhnika: true,
      vuzenica: true,
      zagorjeobsavi: true,
      zavrc: true,
      zrece: true,
      crensovci: true,
      crnanakoroskem: true,
      crnomelj: true,
      salovci: true,
      sempetervrtojba: true,
      sentilj: true,
      sentjernej: true,
      sentjur: true,
      sentrupert: true,
      sencur: true,
      skocjan: true,
      skofjaloka: true,
      skofljica: true,
      smarjeprijelsah: true,
      smarjesketoplice: true,
      smartnoobpaki: true,
      smartnoprilitiji: true,
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

  handleInterventionChange(item){
    const id = item.target.id;
    const newState = this.state.intervetionsFilter;
    newState[id] = item.target.checked;
    this.setState(newState);
  }
  
  handleInterventionChangeAll(){
    const newState = this.state.intervetionsFilter;
    const checked = this.state.intervetionsFilter.checkedAll;
   Object.keys(this.state.intervetionsFilter).forEach((key)=> newState[key] = !checked);
   this.setState(newState);
  }

  handleMuniChangeAll(){
    const newState = this.state.municipalitiesFilter;
    const checked = this.state.municipalitiesFilter.checkedAll;
   Object.keys(this.state.municipalitiesFilter).forEach((key)=> newState[key] = !checked);
   this.setState(newState);
  };
  
  update(){ this.handleChange.bind(this)};

  componentDidMount(){
    let finalItems = [];
    const apiLocation = 'http://spin3.sos112.si/javno/assets/data/lokacija.json';
    const apiLarge = 'https://spin3.sos112.si/javno/assets/data/vecjiObseg.json';
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    fetch(proxy + apiLocation, {cors: 'no-cors'}).then((response) => response.json())
      .then(d => {
          finalItems.push(...formatDate(d.value));
          fetch(proxy + apiLarge, {cors: 'no-cors'}).then((response1) => response1.json())
        .then(d1 => {
          finalItems.splice(0,...formatDateLarge(d1.value));
            this.setState({ intervetions: finalItems });
        });
      });

      
    this.intervalLocation = setInterval(() =>{
      finalItems = []
      fetch(proxy + apiLocation, {cors: 'no-cors'}).then((response) => response.json())
      .then(d => {
          finalItems.push(...formatDate(d.value));
          fetch(proxy + apiLarge, {cors: 'no-cors'}).then((response1) => response1.json())
        .then(d1 => {
          finalItems.splice(0,...formatDateLarge(d1.value));
            this.setState({ intervetions: finalItems });
        });
      });
    }, 60000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalLocation);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 id="App-h1">SPIN 112</h1>
          <MenuBar municipalities={this.state.municipalitiesFilter} muniChange={this.handleMuniChange.bind(this)} muniChangeAll={this.handleMuniChangeAll.bind(this)} interventionChange={this.handleInterventionChange.bind(this)} interventionChangeAll={this.handleInterventionChangeAll.bind(this)} intervetions={this.state.intervetionsFilter}></MenuBar>
          <div className="App-content">
            {this.state.intervetions.map((d) => {
              let muni = String(d.obcinaNaziv);
              let intervention = String(d.intervencijaVrstaNaziv);

              muni = muni.toLowerCase().replace(/\s/g, "",).replace(/\./g,"").replace(/-/g,"").replace("š",'s').replace("č",'c').replace("ž",'z');
              intervention = intervention.toLowerCase().replace(/\s/g, "",).replace(/,/g,"").replace(/š/g,'s').replace(/č/g,'c').replace(/ž/g,'z');

              if(this.state.municipalitiesFilter[muni] && this.state.intervetionsFilter[intervention]){
                return <Tile key={d.nastanekCas + d.obcinaNaziv} type={d.intervencijaVrstaNaziv} 
                time={d.nastanekCas} 
                location={d.obcinaNaziv}
                content={d.besedilo}
                mapLink={d.map}></Tile>
              }
              return null;
            })
              
          }
          </div>
        </header>

      </div>
    );
  }
}

export default App;
