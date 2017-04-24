import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Content from './Content'

export default class ContentList extends Component {
  render() {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridGap: '15px' }}>
        {this.props.contents.map((content, index) =>
          <Content key={content.id} content={content} />
        )}
      </div>
    )
  }
}

ContentList.propTypes = {
  contents: PropTypes.array.isRequired
}
