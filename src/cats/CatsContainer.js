import React, { PureComponent } from 'react'
import Title from '../components/Title'

class CatsContainer extends PureComponent {
  renderCat(cat, index) {
    return null
  }


  render() {
    return(
      <div className="cats wrapper">
      <header>
        <Title content="Our cats" />
      </header>

      <main>
        { this.props.cats.map(this.renderCat) }
      </main>
      </div>
    )
  }
}

export default CatsContainer
