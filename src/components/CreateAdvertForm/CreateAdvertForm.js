import React, { Component } from 'react'

export default class CreateAdvertForm extends Component {
  render() {
    const { title, description, url, price } = this.props.values
    return <div className="add-form">
      <p>Add new advert</p>
      <form onSubmit={this.props.onSubmit}>
        <input placeholder="title" className="input" type="text" value={title} onChange={this.props.onChange} name="title" />
        <input placeholder="description" className="input" type="text" value={description} onChange={this.props.onChange} name="description" />
        <input placeholder="picture url" className="input" type="text" value={url} onChange={this.props.onChange} name="url" />
        <input placeholder="price" className="input" type="text" value={price} onChange={this.props.onChange} name="price" />
        {/* <input placeholder="price" className="input" type="number" value={price} onChange={this.props.onChange} name="price" step="0.01" min="0" max="10" /> */}
        <input type="submit" value="Submit" />
      </form>
    </div>
  }
}