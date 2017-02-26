import React, { Component } from 'react'

export default class Entry extends Component {
  render() {
    return (
      <div>title: {this.props.entry.content}</div>
    )
  }
}
