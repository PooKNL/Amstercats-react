import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
import toMarkdown from 'to-markdown'
import { link } from 'react-router'
import { connect } from 'react-redux'
import createCat from '../actions/cats/create'
import subscribeToCatsService from '../actions/cats/subscribe'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import './CatEditor.sass'

class CatEditor extends PureComponent {
  constructor(props) {
    super()

    const { name, summary, age, breed, liked, profilephoto } = props

    this.state = {
      name,
      summary,
      age,
      breed,
      liked,
      profilephoto,
    }
  }

  updateName(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      name: this.refs.name.value
    })
  }

  updatePhoto(event) {
    this.setState({
      photo: this.refs.profilephoto.value
    })
  }

  updateBreed(event) {
    this.setState({
      breed: this.refs.breed.value
    })
  }

  updateSummary(text, medium) {
    this.setState({
      summary: text
    })
  }

  saveCat() {
    const {
      name,
      summary,
      breed,
      profilephoto

    } = this.state

    const cat = {
      name,
      summary: toMarkdown(summary),
      breed,
      liked: false,
      profilephoto,
    }

    console.log(cat)
    this.props.createCat(cat)
  }

  render() {
    return (
      <div className="editor">
        <input
          type="text"
          ref="name"
          className="name"
          placeholder="Your cat's name"
          defaultValue={this.state.name}
          onChange={this.updateName.bind(this)}
          onKeyDown={this.updateName.bind(this)} />

        <Editor
          ref="summary"
          options={{
            placeholder: {text: 'Write something about your cat...'}
          }}
          onChange={this.updateSummary.bind(this)}
          onKeyDown={this.updateSummary.bind(this)}
          text={this.state.summary} />

        <input
          type="text"
          ref="breed"
          className="breed"
          placeholder="Breed of cat"
          defaultValue={this.state.breed}
          onChange={this.updateBreed.bind(this)}
          onKeyDown={this.updateBreed.bind(this)} />

        <input
          type="text"
          ref="photo"
          className="photo"
          placeholder="Place a valid url of a profile photo of your cat."
          defaultValue={this.state.profilephoto}
          onChange={this.updatePhoto.bind(this)}
          onKeyDown={this.updatePhoto.bind(this)} />


        <div className="actions">
          <button className="primary" onClick={this.saveCat.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ cat }) => ({ cat })
export default connect(mapStateToProps, { createCat, subscribeToCatsService })(CatEditor)
