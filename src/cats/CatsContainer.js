import React, { PureComponent, PropTypes } from 'react'
import Title from '../components/Title'
import CatItem from '../cats/CatItem'
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
    return <CatItem key={index} { ...cat } liked={ false } />
  }

  render() {
    return(
      <div className="page-wrapper">
          <header>

              <div className="intro-week-wrapper">
                <div className="intro-text">
                    <Title content="Welcome to the lovely cats of Amsterdam!" />
                    <p> A prototype website for my (mostly female =) ) friends
                    who adore cats. A user can create and modify profiles for their own
                    cats and share pictures with friends. </p>
                    <ul>
                      <li> Add your own cat profile to the site </li>
                      <li> Upload pictures of your cat  </li>
                      <li> Enjoy beautiful pictures of other cats </li>
                      <li> And like, like, like! </li>
                    </ul>
                </div>
                <div className="week-cat">
                  <h1> Cat of the week! </h1>
                  <img src='http://res.cloudinary.com/daahasvbo/image/upload/v1490779894/Wally4_xyl8zr.jpg' />
                  <h2> Wally </h2>
                </div>
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

const mapStateToProps = ( { cats }) => ({ cats })

export default connect(mapStateToProps, { fetchCats, subscribeToCatsService })(CatsContainer)
