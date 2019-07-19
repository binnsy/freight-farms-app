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
    language: '',
    text: ''
  }
}

getHello =() => {
    // console.log(languages)
    const random = (Math.random() * languages.length) | 0
    // console.log(languages[random])
    const oneLanguage = languages[random]
    // console.log(oneLanguage)
    this.setState({
        language: oneLanguage.language,
        text: oneLanguage.text
    })
  }

  submitEvent() {
    this.getHello()
    // console.log(languages)
  }

  render() {
      const { language, text } = this.state
      // console.log(language)
      // console.log(text)

      return(
        <div className="button-style" data-test="buttonComponent">
          <button onClick={() => this.submitEvent()} className="button border border-white rounded">
            Hello World
          </button>
          <div className="button-output">
          <h4 className="output">
          {language}
          <br></br>
          {text}
          </h4>
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
