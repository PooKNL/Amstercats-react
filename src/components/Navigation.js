import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { history } from '../store'
import signOut from '../actions/user/sign-out'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavIcon from 'material-ui/svg-icons/maps/navigation'
import FlatButton from 'material-ui/FlatButton'
import './Navigation.sass'

export class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  signOut(event) {
    event.preventDefault()
    this.props.signOut()
  }

  signUp() {
    history.push('/sign-up')
  }

  goHome() {
    history.push('/')
  }

  render() {
    const { signedIn } = this.props
    return (
      <AppBar
        title="AmsterCats"
        iconElementLeft={<IconButton onClick={this.goHome}><NavIcon /></IconButton>}
        iconElementRight={signedIn ?
          <FlatButton id="signing" label="Sign out" onClick={this.signOut.bind(this)} /> :
          <FlatButton id="signing" label="Sign in / up" onClick={this.signUp} />
        }
      />
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { signOut })(Navigation)
