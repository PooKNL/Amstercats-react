import React, { PureComponent, PropTypes } from 'react'
import './BasicGallery.scss'

export class BasicGallery extends PureComponent {
  static propTypes = {}

  render() {
    const { name, photo1, photo2, photo3, photo4, photo5, photo6} = this.props

    return(
      <div className="gallery-container">
          <h1> Personal photos {name} </h1>
          <div className="photos">
            <div className="photo1">
              <img src={ photo1 } />
            </div>
            <div className="photo2">
              <img src={ photo2 } />
            </div>
            <div className="photo3">
              <img src={ photo3 } />
            </div>
            <div className="photo4">
              <img src={ photo4 } />
            </div>
            <div className="photo5">
              <img src={ photo5 } />
            </div>
            <div className="photo6">
              <img src={ photo6 } />
            </div>
          </div>
      </div>
    )
  }
}

export default BasicGallery
