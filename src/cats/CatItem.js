import React, { PureComponent } from 'react'
import LikeButton from '../components/LikeButton'


class CatItem extends PureComponent {
  render() {
    const { name, summary, age, breed } = this.props

    return(
        <article className="cat">
          <h1>{ name }</h1>
          <div>
            <p>{ summary }</p>
            <ul>
              <li>Age: { age }</li>
              <li>Breed: { breed }</li>
            </ul>
          </div>
          <footer>
            < LikeButton />
          </footer>
        </article>
    )
  }
}

export default CatItem
