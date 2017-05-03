import React, { PureComponent, PropTypes } from 'react'
import './WeekCat.scss'

export class WeekCat extends PureComponent {
  static propTypes = {}

  render() {
    const { cats } = this.props

    const weekCat = this.props.cats.filter(function (cat) {
      return cat.likedBy.length === 2
    })

    const weekName = weekCat.name
    const weekPhoto = weekCat.photo
    console.log(weekName)

    return(
        <div className="week-cat">
          <h1> Cat of the week! </h1>
          <img id="main-profile-photo" src='http://res.cloudinary.com/daahasvbo/image/upload/v1490779894/Wally4_xyl8zr.jpg' />
          <h2>   </h2>
        </div>
    )
  }
}

export default WeekCat
