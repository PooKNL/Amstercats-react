import React, { PureComponent } from 'react'
import Title from '../components/Title'
import CatItem from '../cats/CatItem'

class CatsContainer extends PureComponent {
  renderCat(cat, index) {
    return <CatItem key={index} { ...cat } />
  }

  render() {
    return(
      <div className="cats wrapper">
        <header>
          <Title content="The Amstercats!" />
        </header>
        <main>
          { this.props.cats.map(this.renderCat) }
        </main>
      </div>
    )
  }
}

export default CatsContainer
