import React, { PureComponent, PropTypes } from 'react'
import './WeekCat.scss'

export class WeekCat extends PureComponent {
  static propTypes = {}

  render() {
    const { weekCat } = this.props
    const { name, profilephoto } = weekCat

    console.log(weekCat)
    console.log(name)

    return(
        <div className="week-cat">
          <h1> Cat of the week! </h1>
          <img id="main-profile-photo" src='http://res.cloudinary.com/daahasvbo/image/upload/v1490779894/Wally4_xyl8zr.jpg' />
          <h2> Wally </h2>
        </div>
    )
  }
}

export default WeekCat
