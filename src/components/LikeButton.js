import React, { PureComponent } from 'react'
import './LikeButton.sass'
import HeartGrey from '../images/heart-cat-grey.svg'
import HeartRed from '../images/heart-cat-red.svg'

class LikeButton extends PureComponent {
  constructor() {
  super()

    this.state = {
      liked: false
    }
  }
  classNames() {
    const { liked } = this.state
    let classes = 'like'

    if (liked) { classes += ' liked' }

    return classes
  }

  toggleLike() {
    this.setState({
      liked: !this.state.liked
    })
  }

  render() {
    const { liked } = this.state
    return (
      <div className={ this.classNames() }>
        <button onClick={ this.toggleLike.bind(this) }>
          <img className="heart" src={ liked ? HeartRed : HeartGrey } />
          <span className="copy">
            <img className="heart" src={ liked ? HeartRed : HeartGrey } />
          </span>
        </button>
        <span className="likes">{ liked ? 'You like this' : null }</span>
      </div>
    )
  }
}

export default LikeButton
