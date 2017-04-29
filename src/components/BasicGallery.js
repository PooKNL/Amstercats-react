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
              <div>
                <img className="gallery-photo" src={ photo1 } />
              </div>
              <div>
                <img className="gallery-photo" src={ photo2 } />
              </div>
              <div>
                <img className="gallery-photo" src={ photo3 } />
              </div>
              <div>
                <img className="gallery-photo" src={ photo4 } />
              </div>
              <div>
                <img className="gallery-photo" src={ photo5 } />
              </div>
              <div>
                <img className="gallery-photo" src={ photo6 } />
              </div>
          </div>
      </div>
    )
  }
}

export default BasicGallery
