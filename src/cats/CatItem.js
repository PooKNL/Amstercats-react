import React, { PureComponent, PropTypes } from 'react'
import LikeButton from '../components/LikeButton'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import toggleLikeAction from '../actions/cats/toggle-like'
import './CatItem.scss'

export class CatItem extends PureComponent {
  static propTypes = {
    // _id: PropTypes.string.isRequired,
    // // profilephoto: PropTypes.string.isRequired,
    // summary: PropTypes.string.isRequired,
    // toggleLikeAction: PropTypes.func.isRequired,
  }

  toggleLike() {
    const { _id, likedBy, currentUser } = this.props
    console.log('CLICK (CatItem)', _id)
    this.props.toggleLikeAction({ _id, likedBy }, currentUser)
  }


  render() {
    const { _id, name, summary, age, breed, liked, likedBy, profilephoto  } = this.props

    return(
        <article className="cat">
          <header>
            <div className="header">
              <div className="photo-stats">
                <div className="profile-photo">
                  <img src={ profilephoto } />
                </div>
                <div className="stats">
                  <h3> <Link to={`/cats/${_id}`}>{ name }</Link> </h3>
                  <ul>
                    <p> <strong> Age: </strong>  { age }</p>
                    <p> <strong> Breed: </strong> { breed }</p>
                    <p> <strong> Origin: </strong> Amsterdam, Netherlands </p>
                  </ul>
                </div>
              </div>

            </div>
          </header>
          <main>
            <h3> Bio: </h3>
            <p>{ summary }</p>

          </main>
          <footer>
              <LikeButton
                liked={ liked }
                // likes={ likedBy.length } FIX likedBy bug
                onChange={ this.toggleLike.bind(this) } />
          </footer>
        </article>
    )
  }
}

const mapStateToProps = ({ currentUser }, { likedBy }) => {
  return {
    currentUser,
    // liked: likedBy.filter((like) => (like === (currentUser && currentUser._id))).length > 0 FIX likedBy bug
  }
}

export default connect(mapStateToProps, { toggleLikeAction })(CatItem)
