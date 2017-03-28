import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchCats from '../actions/cats/fetch'
import Title from '../components/Title'
import CatItem from '../cats/CatItem'
import Gallery from '../components/Gallery'

export class CatPage extends PureComponent {
  static propTypes = {}

  componentDidMount() {
    this.props.fetchCats()
  }

  renderCat(cat, id) {
    const { _id } = params.catId
    return <CatItem key={ _id } { ...cat } />
  }

  render() {
    const cat = this.renderCat

    return(
      <div className="Profile page">
        <h1> Cat Profile </h1>
        < CatItem { cat } />
      </div>
    )
  }
}

const mapStateToProps = ({ cats }, { params }) => {
  const cat = cats.reduce((prev, next) => {
    if (next._id === params.catId) {
      return next
    }
    return prev
  }, {})

  return {
    ...cat
  }
}

export default connect(mapStateToProps, { fetchCats })(CatPage)
