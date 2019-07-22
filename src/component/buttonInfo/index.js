import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';

class ButtonInfo extends Component {
  render() {
      const { title, desc } = this.props

      if(!title) {
        return null
      }

    return(
      <div data-test="buttonInfoComponent">
        <h2 data-test="componentTitle">
        {title}
        </h2>
        <div data-test="componentDesc">
          {desc}
        </div>
      </div>
    )
  }
}

ButtonInfo.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
}

export default ButtonInfo
