import React, { Component } from 'react'
import './styles.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { languages } from './languages'

class HelloButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: '',
      text: ''
    }
  }

  getHello = () => {
    const random = (Math.random() * languages.length) | 0

    const oneLanguage = languages[random]

    this.setState({
      language: oneLanguage.language,
      text: oneLanguage.text
    })
  }

  submitEvent() {
    this.getHello()
  }

  render() {
    const { language, text } = this.state

    return (
      <div className="button-style" data-test="buttonComponent">
        <button
          onClick={() => this.submitEvent()}
          className="button border border-white rounded"
        >
          Hello World
        </button>
        <div className="button-output">
          <h4 className="output">
            {language}
            <br />
            {text}
          </h4>
        </div>
      </div>
    )
  }
}

export default HelloButton
