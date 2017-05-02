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
    if (!currentUser) return

    console.log('CLICK (CatItem)', _id)
    this.props.toggleLikeAction({ _id, likedBy }, currentUser)
  }


  render() {

    // console.log(this.props)
    const { _id, name, summary, age, breed, liked, likes, likedBy, profilephoto  } = this.props

    const cat = this.props.cats.filter(function(cat) {
      return cat._id === _id
    })[0]

    return(
        <article className="cat">
          <header>
              <div className="photo-stats">
                <div className="profile-photo">
                  <img id="main-profile-photo" src={ profilephoto } />
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
          </header>
          <main>
              <div className="summary">
                <h3> Bio: </h3>
                <p>{ summary }</p>
              </div>
          </main>
              <footer>
                <LikeButton
                  liked={ cat.likedBy.filter((like) => (like === (currentUser && currentUser._id))).length > 0 }
                  likes={ cat.likedBy.length }
                  onChange={ this.toggleLike.bind(this) } />
              </footer>
        </article>
    )
  }
}

const mapStateToProps = ({ currentUser, cats }) => ({ currentUser, cats })

export default connect(mapStateToProps, { toggleLikeAction })(CatItem)
