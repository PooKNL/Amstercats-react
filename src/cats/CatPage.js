import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchCats from '../actions/cats/fetch'
import Title from '../components/Title'
import CatItem from '../cats/CatItem'
import BasicGallery from '../components/BasicGallery'
import './catpage.scss'

export class CatPage extends PureComponent {
  static propTypes = {}

  componentDidMount() {
    this.props.fetchCats()
  }

  render() {
    const { cat, name, age, breed, profilephoto, summary, photo1, photo2, photo3, photo4, photo5, photo6 } = this.props
    return(
        <div className="profile-wrapper">
          <div className="profile-article">
            <h1 className="name"> {name} </h1>
            < CatItem age={age} breed={breed}
            profilephoto={profilephoto} summary={summary}
            />
          </div>
          <div className="profile-gallery">
            < BasicGallery name={name} photo1={photo1} photo2={photo2}
            photo3={photo3} photo4={photo4} photo5={photo5}
            photo6={photo6} />
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
