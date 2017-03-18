import React, { PureComponent, PropTypes } from 'react'
import Title from '../components/Title'
import CatItem from '../cats/CatItem'
import { connect } from 'react-redux'
import { App } from '../App'
import CatsEditor from '../cats/CatsEditor'
import fetchCats from '../actions/cats/fetch'


export class CatsContainer extends PureComponent {
  static propTypes = {
    cats: PropTypes.array.isRequired,
    fetchCats: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchCats()
  }

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
          < CatsEditor />
        </main>
      </div>
    )
  }
}

const mapStateToProps = ( { cats }) => ({ cats })

export default connect(mapStateToProps, { fetchCats })(CatsContainer)
