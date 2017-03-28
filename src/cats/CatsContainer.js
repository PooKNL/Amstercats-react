import React, { PureComponent, PropTypes } from 'react'
import Title from '../components/Title'
import CatItem from '../cats/CatItem'
import { connect } from 'react-redux'
import { App } from '../App'
import CatsEditor from '../cats/CatsEditor'
import fetchCats from '../actions/cats/fetch'
import SignIn from '../users/SignIn'
import './CatsContainer.scss'


export class CatsContainer extends PureComponent {
  static propTypes = {
    cats: PropTypes.array.isRequired,
    fetchCats: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchCats()
  }

  renderCats(cat, index) {
    return <CatItem key={index} { ...cat } />
  }

  render() {
    return(
      <div className="page-wrapper">
        <div className="header-wrapper">
          <header>
            <div className="intro-wrapper">
              <Title content="Welcome to the lovely cats of Amsterdam!" />
                <p> A prototype website for my (mostly female =) ) friends
                who adore cats. A user can create and modify profiles for their own
                cats and share pictures with friends. </p>
            </div>
            <div className="sign-in">
              < SignIn />
            </div>
          </header>
        </div>
        <div className="main-wrapper">
          <main>
            <div className="cats-profiles">
              { this.props.cats.map(this.renderCats) }
            </div>
            <div className="editor">
              <h2> Add your own Amstercat </h2>
              < CatsEditor />
            </div>
          </main>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ( { cats }) => ({ cats })

export default connect(mapStateToProps, { fetchCats })(CatsContainer)
