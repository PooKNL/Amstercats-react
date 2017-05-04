import React, { PureComponent, PropTypes } from 'react'
import Title from '../components/Title'
import CatItem from '../cats/CatItem'
import CatIntro from '../cats/CatIntro'
import WeekCat from '../cats/WeekCat'
import { connect } from 'react-redux'
import { App } from '../App'
import subscribeToCatsService from '../actions/cats/subscribe'
import CatsEditor from '../cats/CatsEditor'
import fetchCats from '../actions/cats/fetch'
import './CatsContainer.scss'


export class CatsContainer extends PureComponent {
  static propTypes = {
    cats: PropTypes.array.isRequired,
    fetchCats: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchCats()
    this.props.subscribeToCatsService()
  }

  renderCats(cat, index) {
    return <CatItem key={index} { ...cat } />
  }

  renderPage(cats)
    {if(this.props.cats.length > 0) { }}



  render() {
    const { cat, likedBy, profilephoto, currentUser, _id, cats } = this.props

    const weekCatArray = this.props.cats.filter(function (cat) {
      return cat.likedBy.length === 2
    })

    const weekCat = weekCatArray[0]

    return(
      <div className="page-wrapper">
          <header>
            <div className="intro-week-wrapper">
              < CatIntro />
              < WeekCat weekCat={ weekCat } />
            </div>
          </header>
          <main>
            <div className="main-wrapper">
              <div className="profile-title">
                <Title content="AmsterCats Profiles" />
              </div>
              <div className="cats-profiles">
                { this.props.cats.map(this.renderCats) }
              </div>
              <div className="editor">
                <h2> Add your own Amstercat </h2>
                < CatsEditor />
              </div>
            </div>
          </main>
      </div>
    )
  }
}

const mapStateToProps = ({ cats }) => ({ cats })

export default connect(mapStateToProps, { fetchCats, subscribeToCatsService })(CatsContainer)
