import React, { PropTypes, Component } from 'react'

import Content from './Content'

export default class ContentList extends Component {
  render() {
    return (
      <div>
        {this.props.contents.map((content, index) =>
          <Content key={index} content={content} />
        )}
      </div>
    )
  }
}

ContentList.propTypes = {
  contents: PropTypes.array.isRequired
}
