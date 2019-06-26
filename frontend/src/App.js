import React, { Component } from 'react';
import Header from './components/Header'
import Home from './components/Home'
import Filter from './components/Filter'
import './App.css';
// import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      hotels: []
    }
  }

  componentDidMount() {
    fetch("/hoteles")
      .then(res => res.json())
      .then(hotels => this.setState({ hotels }, () => console.log('hoteles fetched', hotels)))
  }


  render() {
    return (


      < div className="App" >
        <Header />
        <div className="Home">
          <Filter />
          <div className="Cuerpo">
            <Home hotels={this.state.hotels} />
          </div>
        </div>

      </div >

    );
  }
}

export default App;