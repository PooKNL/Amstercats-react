import React, { PureComponent, PropTypes } from 'react'
import './WeekCat.scss'

export class WeekCat extends PureComponent {
  static propTypes = {}

  render() {
    const { weekCat, name, profilephoto } = this.props

    return(
      <div className="week-cat">
            <h1> Cat of the day! </h1>
              {weekCat &&
                <div className="week-condition">
                  <img id="week-profile-photo" src={ weekCat.profilephoto } />
                  <h2> { weekCat.name }  </h2>
                </div>
              }
      </div>
    )
  }
}

export default WeekCat
