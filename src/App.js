import React from 'react'
// import {useState, useEffect} from 'react'
import Header from 'component/header'
import HelloButton from 'component/button'
import Headline from 'component/headline'
// import Example from 'component/example'
import './app.scss'
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/Navbar'
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { BrowserRouter as Router} from "react-router-dom"
// import {withRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
// import { BrowserRouter, Link} from 'react-router-dom'
// class App extends Component {
function App(props) {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  // useEffect(() => props.history.listen(() => {
  //   setIsMenuOpen(false)
  // }))
  // render() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Route path='/' />
          <Route exact path='/hello' component={HelloButton} />
          <Route exact path='/headline' component={Headline} />
      </div>
    </Router>
  //       <Header
  //       />
  //     //   <section className="main">
  //     //     <Example />
  //     //     <Headline header="Hello World" desc="Hello World" />
  //     //   </section>
  //     //   <div className="button">
  //     //     <HelloButton />
  //     //   </div>
  //     // </div>
  //     // </Router>
    )
  }
      // <Router>
      // <div className="App">
      //   <Header
      //   />
      //   <section className="main">
      //     <Example />
      //     <Headline header="Hello World" desc="Hello World" />
      //   </section>
      //   <div className="button">
      //     <HelloButton />
      //   </div>
      // </div>
    //   </Router>
  //   )
  // }
  // isMenuOpen={isMenuOpen}
  // onToggleMenu={() => setIsMenuOpen( !isMenuOpen)}
export default App
