import React, { PureComponent, PropTypes } from 'react'
import LikeButton from '../components/LikeButton'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './WeekCat.scss'

export class WeekCat extends PureComponent {
  static propTypes = {}

  render() {
    const { _id, name, profilephoto  } = this.props

    return(
        <div className="week-cat">
              <img src={ profilephoto } />
              <h1> <Link to={`/cats/${_id}`}>{ name }</Link> </h1>
        </div>
    )
  }
}

const mapStateToProps = ({ currentUser } => {
  return {
    currentUser,
  }
}

export default connect(mapStateToProps, { toggleLikeAction })(WeekCat)
