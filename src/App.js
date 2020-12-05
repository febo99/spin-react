import './App.css';
import Tile from './components/Tile/Tile';
import { Component } from 'react';


class App extends Component{
  state ={
    intervetions : []
  }
  componentDidMount(){
    const api = 'https://spin3.sos112.si/javno/assets/data/lokacija.json';
    fetch(api).then((response) => response.json())
    .then(d => {
        this.setState({ intervetions: d.value });
    });
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 id="App-h1">SPIN 112</h1>
          <div className="App-content">
            {this.state.intervetions.map((d) => {
              return <Tile type={d.intervencijaVrstaNaziv} time={d.prijavaCas} location={d.obcinaNaziv} content={d.besedilo}></Tile>
            })}
          </div>
        </header>

      </div>
    );
  }
}

export default App;
