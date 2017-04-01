import React, { PureComponent, PropTypes } from 'react'
import Title from '../components/Title'
import './CatIntro.scss'

export class CatIntro extends PureComponent {
  static propTypes = {}

  render() {
    return(
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
                <p> <strong> Sign up, add your cat and enjoy! </strong> </p>
          </div>
    )
  }
}


export default CatIntro
