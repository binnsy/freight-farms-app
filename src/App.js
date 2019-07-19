import React, { Component } from 'react';
import Header from './component/header/Header';
import HelloButton from './component/button/HelloButton';
import Headline from './component/headline/Headline';
import './app.scss';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
        <Headline header="Hello" desc="Hello"/>
        </section>
        <div className="button">
          <HelloButton />
        </div>
      </div>
    )
  }
}

export default App
