import React, { PureComponent, PropTypes } from 'react'
import LikeButton from '../components/LikeButton'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './CatProfile.scss'

export class CatProfile extends PureComponent {
  static propTypes = {
    // _id: PropTypes.string.isRequired,
    // // profilephoto: PropTypes.string.isRequired,
    // summary: PropTypes.string.isRequired,
    // toggleLikeAction: PropTypes.func.isRequired,
  }

  render() {
    const { _id, name, summary, age, breed, liked, likes, likedBy, profilephoto  } = this.props

    return(
      <div className="profile-wrapper">
        <div className="profile-photo">
          <img id="profilepage-photo" src={ profilephoto } />
        </div>
        <div className="cat">
              <div className="stats">
                  <h3> <Link to={`/cats/${_id}`}>{ name }</Link> </h3>
                  <ul>
                    <p> <strong> Age: </strong>  { age }</p>
                    <p> <strong> Breed: </strong> { breed }</p>
                    <p> <strong> Origin: </strong> Amsterdam, Netherlands </p>
                  </ul>
              </div>
              <div className="summary">
                <h3> Bio: </h3>
                <p>{ summary }</p>
              </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
  }
}

export default connect(mapStateToProps)(CatProfile)