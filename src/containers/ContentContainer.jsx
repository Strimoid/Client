import axios from 'axios'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Content from '../web/components/contents/Content'

export default class ContentContainer extends Component {
  constructor() {
    super()
    this.state = { content: null }
  }

  componentDidMount() {
    let id = this.props.match.params.id
    axios.get(`${Config.baseUrl}/contents/${id}`).then((response) => {
      this.setState({content: response.data})
    })
  }

  render() {
    if (!this.state.content) {
      return null
    }

    return <Content content={this.state.content} />
  }
}
