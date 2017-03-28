import React, { PureComponent } from 'react'
import LikeButton from '../components/LikeButton'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './CatItem.scss'

class CatItem extends PureComponent {
  render() {
    const { _id, name, summary, age, breed, liked, photo  } = this.props

    return(
        <article className="cat">
          <header>
            <div className="header">
              <img src={ photo } />
              <h1> <Link to={`/cats/${_id}`}>{ name }</Link> </h1>
            </div>
          </header>
          <main>
            <p>{ summary }</p>
          </main>
          <footer>
            <ul>
              <li>Age: { age }</li>
              <li>Breed: { breed }</li>
              </ul>
            <LikeButton
              liked={ liked } />
          </footer>
        </article>
    )
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(CatItem)
