import React, { PureComponent, PropTypes } from 'react'
import './BasicGallery.scss'

export class BasicGallery extends PureComponent {
  static propTypes = {}

  render() {
    const { name, photo1, photo2, photo3, photo4, photo5, photo6} = this.props

    return(
      <div className="gallery">
          <h1> Personal photos {name} </h1>
          <div className="photos">
          <img src={ photo1 } />
          <img src={ photo2 } />
          <img src={ photo3 } />
          <img src={ photo4 } />
          <img src={ photo5 } />
          <img src={ photo6 } />
          </div>
      </div>
    )
  }
}

export default BasicGallery
