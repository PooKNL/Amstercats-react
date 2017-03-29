import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchCats from '../actions/cats/fetch'
import Title from '../components/Title'
import CatItem from '../cats/CatItem'
import Gallery from '../components/Gallery'
import './catpage.scss'

export class CatPage extends PureComponent {
  static propTypes = {}

  componentDidMount() {
    this.props.fetchCats()
  }

  render() {
    return(
      <div className="profile-wrapper">
        <div className="profile-article">
          <h1> {this.props.name} </h1>
          < CatItem age={this.props.age} breed={this.props.breed}
          photo={this.props.photo} summary={this.props.summary}
           />
        </div>
        <div className="gallery">
            <h1> Personal photos {this.props.name} </h1>
        </div>
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
