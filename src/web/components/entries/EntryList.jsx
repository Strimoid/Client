import React, { PropTypes, Component } from 'react'

import Entry from './entry'

export default class EntryList extends Component {
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
