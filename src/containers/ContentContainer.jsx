import axios from 'axios'
import React, { PropTypes, Component } from 'react'

import Content from '../web/components/contents/Content'

export default class ContentContainer extends React.Component {
  constructor() {
    super()
    this.state = { content: null }
  }

  componentDidMount() {
    let id = this.props.match.params.id

    axios.get(`https://cors-anywhere.herokuapp.com/https://strm.pl/api/contents/${id}`).then((response) => {
      this.setState({content: response.data.data})
    })
  }

  render() {
    //return <Content content={this.state.contents[0]} />
    return null
  }
}
