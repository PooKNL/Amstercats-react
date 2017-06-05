import React, { PureComponent, PropTypes } from 'react'
import Title from '../components/Title'
import { Link } from 'react-router'
import './CatIntro.sass'

export class CatIntro extends PureComponent {
  static propTypes = {}

  render() {
    return(
          <div className="intro-text">
              <Title content="Welcome to the lovely cats of Amsterdam!" />
              <p> A prototype website for my (mostly female =) ) friends who adore cats. A user can create and modify profiles for their own cats and share pictures with friends. </p>
              <ul>
                <li> Add your own cat profile to the site </li>
                <li> Upload pictures of your cat  </li>
                <li> Enjoy beautiful pictures of other cats </li>
                <li> And like, like, like! </li>
              </ul>
                <h3 id="cateditor"> <strong> Sign up, <Link to={`/add-cat`}>add your cat</Link> and enjoy! </strong> </h3>
          </div>
    )
  }
}


export default CatIntro
