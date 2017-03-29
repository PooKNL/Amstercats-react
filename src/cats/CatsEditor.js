import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import createCat from '../actions/cats/create'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import './CatsEditor.sass'

class CatEditor extends PureComponent {
  constructor(props) {
    super()

    const { name, summary, age, breed, liked, photo } = props

    this.state = {
      name,
      summary,
      age,
      breed,
      liked,
      photo,
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
      photo: this.refs.photo.value
    })
  }

  updateBreed(event) {
    this.setState({
      breed: this.refs.breed.value
    })
  }

  updateIntro(text, medium) {
    this.setState({
      summary: text
    })
  }

  saveCat() {
    const {
      name,
      summary,
      breed,
      photo

    } = this.state

    const cat = {
      name,
      summary: toMarkdown(summary),
      breed,
      liked: false,
      photo,
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
          placeholder="Name"
          defaultValue={this.state.name}
          onChange={this.updateName.bind(this)}
          onKeyDown={this.updateName.bind(this)} />

        <Editor
          ref="summary"
          options={{
            placeholder: {text: 'Write something about your cat...'}
          }}
          onChange={this.updateIntro.bind(this)}
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
          placeholder="Photo URL"
          defaultValue={this.state.photo}
          onChange={this.updatePhoto.bind(this)}
          onKeyDown={this.updatePhoto.bind(this)} />


        <div className="actions">
          <button className="primary" onClick={this.saveCat.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

export default connect(null, {createCat})(CatEditor)
