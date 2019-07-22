import React, { Component } from 'react';
import './styles.scss';
import 'bootstrap/dist/css/bootstrap.css';

class Headline extends Component {
  render () {
    const { header, desc } = this.props
    console.log('this.props', this.props)
    if(!header){
      return null
    }

    return (
      <div data-test="HeadlineComponent">
        <h4 data-test="header">{header}</h4>
          <p data-test="desc">
            {desc}
          </p>
      </div>
    )
  }
}

export default Headline
