import axios from 'axios'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ContentList from '../web/components/contents/ContentList'

export default class ContentListContainer extends Component {
  constructor() {
    super()
    this.state = { contents: [] }
  }

  componentDidMount() {
    axios.get(`${Config.baseUrl}/contents`).then((response) => {
      this.setState({contents: response.data.data})
    })
  }

  render() {
    return <ContentList contents={this.state.contents} />
  }
}
