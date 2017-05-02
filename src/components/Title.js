import React, { PureComponent, PropTypes } from 'react'
import './Title.sass'

class Title extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }

  render() {
    return(
      <h1>{ this.props.content }</h1>
    )
  }
}

export default Title
