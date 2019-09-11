import React, { Component } from 'react'
import { connect } from "react-redux"
import { createAdvert } from "../../actions/adverts"
import CreateAdvertForm from './CreateAdvertForm'

class CreateAdvertFormContainer extends Component {
  state = {
    title: "",
    description: "",
    url: "",
    price: 0
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.createAdvert(this.state)
    this.setState({
      title: "",
      description: "",
      url: "",
      price: 0
    })
  }

  render() {
    return (<CreateAdvertForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state} />
    )
  }

}

const mapDispatchToProps = {
  createAdvert,
}

export default connect(null, mapDispatchToProps)(CreateAdvertFormContainer)