import React, { Component, PropTypes } from 'react'

export default class Content extends Component {
  render() {
    return (
      <div>title: {this.props.content.title}</div>
    )
  }
}

Content.propTypes = {
  content: PropTypes.object.isRequired
}
