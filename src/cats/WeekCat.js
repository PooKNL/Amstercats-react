import React, { PureComponent, PropTypes } from 'react'
import './WeekCat.scss'

export class WeekCat extends PureComponent {
  static propTypes = {}

  render() {
    const { weekCat, name, profilephoto } = this.props
    console.log(weekCat)

    if(weekCat) {
      console.log(weekCat.name)
      console.log(weekCat.profilephoto)
    }

    return(
      <div className="week-cat">
            <h1> Cat of the week! </h1>
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
