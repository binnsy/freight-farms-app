import React, { Component } from 'react'
import propTypes from 'prop-types'
import './styles.scss'
import 'bootstrap/dist/css/bootstrap.css'

class Headline extends Component {
  render() {
    const { header, desc } = this.props

    return (
      <div data-test="HeadlineComponent">
        <h4 data-test="header">{header}</h4>
        <p data-test="desc">{desc}</p>
      </div>
    )
  }
}

Headline.defaultProps = {
  header: '',
  desc: ''
}

Headline.propTypes = {
  header: propTypes.string.isRequired,
  desc: propTypes.string.isRequired
}

export default Headline
