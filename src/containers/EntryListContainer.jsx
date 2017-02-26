import axios from 'axios'
import React, { PropTypes, Component } from 'react'

import EntryList from '../web/components/entries/EntryList'

export default class EntryListContainer extends React.Component {
  constructor() {
    super()
    this.state = { entries: [] }
  }

  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://strm.pl/api/entries').then((response) => {
      this.setState({contents: response.data.data})
    })
  }

  render() {
    return <EntryList entries={this.state.entries} />
  }
}
