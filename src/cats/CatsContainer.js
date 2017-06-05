import React, { PureComponent, PropTypes } from 'react'
import Title from '../components/Title'
import CatItem from '../cats/CatItem'
import CatIntro from '../cats/CatIntro'
import WeekCat from '../cats/WeekCat'
import { connect } from 'react-redux'
import { App } from '../App'
import subscribeToCatsService from '../actions/cats/subscribe'
import fetchCats from '../actions/cats/fetch'
import './CatsContainer.sass'


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

  render() {
    const { cat, likedBy, profilephoto, currentUser, _id, cats } = this.props
    const likedBySortedArray = cats.sort((a, b) => (b.likedBy.length - a.likedBy.length))
    const weekCat = likedBySortedArray[0]

    return(
      <div className="page-wrapper">
          <header>
            <div className="intro-week-wrapper">
              < CatIntro cats= { cats } />
              < WeekCat weekCat= { weekCat } />
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

            </div>
          </main>
      </div>
    )
  }
}

const mapStateToProps = ({ cats }) => ({ cats })

export default connect(mapStateToProps, { fetchCats, subscribeToCatsService })(CatsContainer)
