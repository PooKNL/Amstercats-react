import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import CatsEditor from '../cats/CatsEditor'
import CatProfile from '../cats/CatProfile'
import subscribeToCatsService from '../actions/cats/subscribe'
import fetchCats from '../actions/cats/fetch'
import './AddCat.sass'

export class AddCat extends PureComponent {
  static propTypes = {}

  componentDidMount() {
    this.props.fetchCats()
    this.props.subscribeToCatsService()
  }

  renderCats(cat, index) {
    return <CatProfile key={index} { ...cat } />
  }

  render() {
    const { cat, likedBy, profilephoto, currentUser, _id, cats } = this.props

    return(
      <div className="addcat-wrapper">
        <h1> Add a AmsterCat profile  </h1>
        <div className="profile-editor">
          < CatsEditor />
        </div>
        <div className="user-cat-profiles">
          <h2> Your cat profiles </h2>
            { this.props.cats.map(this.renderCats) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ cats }) => ({ cats })

export default connect(mapStateToProps, { fetchCats, subscribeToCatsService })(AddCat)
