import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchCats from '../actions/cats/fetch'

export class CatPage extends PureComponent {
  static propTypes = {}

  componentDidMount() {
    this.props.fetchCats()
  }

  render() {
    return(
      <div className="Profile page">
        <p> PLACEHOLDER KAT PROFIEL </p>
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
