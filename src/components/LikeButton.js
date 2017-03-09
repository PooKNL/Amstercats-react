import React, { PureComponent, PropTypes } from 'react'
import './LikeButton.sass'
import HeartGrey from '../images/heart-cat-grey.svg'
import HeartRed from '../images/heart-cat-red.svg'

class LikeButton extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    liked: PropTypes.bool.isRequired,
  }

  classNames() {
    const { liked } = this.props
    let classes = 'like'

    if (liked) { classes += ' liked' }

    return classes
  }

  toggleLike() {
    this.props.onChange.bind(this)
  }

  render() {
    const { liked } = this.props
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
