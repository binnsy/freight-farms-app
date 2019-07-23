import React, { Component } from 'react'
import Header from 'component/header'
import HelloButton from 'component/button'
import Headline from 'component/headline'
import './app.scss'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline header="Hello World" desc="Hello World" />
        </section>
        <div className="button">
          <HelloButton />
        </div>
      </div>
    )
  }
}

export default App
