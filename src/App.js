import './App.css';
import Tile from './components/Tile/Tile';
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
    intervetions : []
  }
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
