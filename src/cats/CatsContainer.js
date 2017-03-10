import React, { PureComponent, PropTypes } from 'react'
import Title from '../components/Title'
import CatItem from '../cats/CatItem'
import { connect } from 'react-redux'

class CatsContainer extends PureComponent {
  renderCat(cat, index) {
    return <CatItem key={index} { ...cat } />
  }

  render() {
    return(
      <div className="cats-wrapper">
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

const mapStateToProps = ( { cats }) => ({
  cats
})

export default connect(mapStateToProps)(CatsContainer)
