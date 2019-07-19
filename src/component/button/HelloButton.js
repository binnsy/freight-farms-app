// import React, { Component } from 'react';
// import './styles.scss';
// import 'bootstrap/dist/css/bootstrap.css';
// import PropTypes from 'prop-types';
//
// class HelloButton extends Component {
//   submitEvent() {
//     if(this.props.emitEvent) {
//       this.props.emitEvent()
//     }
//   }
//
//   render() {
//       const { buttonText } = this.props
//
//       return(
//         <div class="button-style" data-test="buttonComponent">
//           <button onClick={() => this.submitEvent()} className="button border border-white rounded">
//             Hello{buttonText}
//           </button>
//         </div>
//       )
//     }
//   }
//
// HelloButton.propTypes = {
//   buttonText: PropTypes.string,
//   emitEvent: PropTypes.func
// }
//
// export default HelloButton

import React, { Component } from 'react';
import './styles.scss';
import 'bootstrap/dist/css/bootstrap.css';
// import PropTypes from 'prop-types';
import { languages } from './languages'

class HelloButton extends Component {
  constructor (props) {
  super(props)
  this.state = {
    // language: '',
    // text: ''
    language: this.getHello()
  }
  // this.submitEvent = this.submitEvent.bind(this);
}
//   submitEvent() {
//     console.log(languages)
//       // api.fetchQuote()
//         .then((languages)=>{
//           this.setState({
//             language: languages.language,
//             text: languages.text
//           })
//         });
// }

// componentDidMount () {
//   // const newLanguage = () => this.setState({ language: this.getHello().language[0] })
//   // console.log(newLanguage)
//   this.getHello()
// //     const newLanguage = () => this.setState({ language: this.getHello() })
// //     setInterval(newLanguage, 24000)
//   }
componentDidMount () {
  const newLanguage = () => this.setState({ language: this.getHello() })
  setInterval(newLanguage, 24000)
}

getHello =() => {
    console.log(languages)
    const random = (Math.random() * languages.length) | 0
    console.log(languages[random])
    return languages[random]
  }

  submitEvent() {
    this.getHello()
    console.log(languages)
    const newLanguage = () => this.setState({ language: this.getHello() })
    
    // if(this.props.emitEvent) {
    //   this.props.emitEvent()
    // }

    // this.setState({
    //   // language: { language },
    //   // text: { text }
    //   languages: this.getHello()
    //
    // })
  }

  render() {
    // const { language, text } = this.props.languages[this.props.random]
      const { language } = this.state
      console.log(language)
      // let language = this.state.language
      // console.log(language)
      // console.log(language)
      // console.log(text)

      return(
        <div className="button-style" data-test="buttonComponent">
          <button onClick={() => this.submitEvent()} className="button border border-white rounded">
            Hello World
          </button>
          <div>
          <h4>{language.language}</h4>
          <h4>{language.text}</h4>
        </div>
      </div>
      )
    }
  }

  // HelloButton.propTypes = {
  //   language: PropTypes.string.isRequired,
  //   text: PropTypes.string.isRequired,
  // }
// HelloButton.propTypes = {
//   buttonText: PropTypes.string,
//   emitEvent: PropTypes.func
// }

export default HelloButton
