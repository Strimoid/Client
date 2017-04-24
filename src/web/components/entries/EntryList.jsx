import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Entry from './entry'

export default class EntryList extends React.Component {
  render() {
    return (
      <div>
        {this.props.entries.map((entry, index) =>
          <Entry key={index} entry={entry} />
        )}
      </div>
    )
  }
}

EntryList.propTypes = {
  entries: PropTypes.array.isRequired
}
