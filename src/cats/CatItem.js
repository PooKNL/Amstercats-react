import React, { PureComponent } from 'react'
import LikeButton from '../components/LikeButton'


class CatItem extends PureComponent {
  render() {
    const { name, summary, age, breed, liked, photo  } = this.props

    return(
        <article className="cat">
          <h1>{ name }</h1>
          <p> { photo } </p>
          <div>
            <p>{ summary }</p>
            <ul>
              <li>Age: { age }</li>
              <li>Breed: { breed }</li>
            </ul>
          </div>
          <footer>
          <LikeButton
            liked={ liked } />
          </footer>
        </article>
    )
  }
}

export default CatItem
