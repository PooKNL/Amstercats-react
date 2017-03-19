import React, { PureComponent } from 'react'
import LikeButton from '../components/LikeButton'
import { connect } from 'react-redux'
import { link } from 'react-router'
import './CatItem.scss'

class CatItem extends PureComponent {
  render() {
    const { name, summary, age, breed, liked, photo  } = this.props

    return(
        <article className="cat">
          <header>
            <div className="header">
              <h1>{ name }</h1>
              <img src={ photo } />
              <h1> <Link to={`/cats/${_id}`}>{ name }</Link> </h1>
            </div>
          </header>
          <main>
            <p>{ summary }</p>
            <ul>
              <li>Age: { age }</li>
              <li>Breed: { breed }</li>
            </ul>
          </main>
          <footer>
            <LikeButton
              liked={ liked } />
          </footer>
        </article>
    )
  }
}

export default CatItem
