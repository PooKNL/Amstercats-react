import React, { PureComponent } from 'react'

class CatItem extends PureComponent {
  render() {
    const { name, summary, age, breed } = this.props

    return(
        <article className="cat">
          <h1>{ name }</h1>
          <div>
            <p>{ summary }</p>
            <ul>
              <li>{ age }</li>
              <li>{ breed }</li>
            </ul>
          </div>
        </article>
    )
  }
}

export default CatItem
