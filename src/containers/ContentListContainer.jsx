import axios from 'axios'
import React, { PropTypes, Component } from 'react'

import ContentList from '../web/components/contents/ContentList'

export default class ContentListContainer extends React.Component {
  constructor() {
    super()
    this.state = { contents: [] }
  }

  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://strm.pl/api/contents').then((response) => {
      this.setState({contents: response.data.data})
    })
  }

  render() {
    return <ContentList contents={this.state.contents} />
  }
}
