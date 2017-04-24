import { Card } from 'antd'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class Content extends Component {
  render() {
    return (
      <Card bodyStyle={{ padding: 0 }}>
        <div className="custom-image">
          <img alt="example" width="100%"
            src={'https://strm.pl/i/100x75/thumbnails/' + this.props.content.thumbnail} />
        </div>
        <div style={{padding: 10}}>
          <Link to={'/c/' + this.props.content.id}>
            <h3>{this.props.content.title}</h3>
          </Link>

          <p>{this.props.content.description}</p>
        </div>
      </Card>
    )
  }
}

Content.propTypes = {
  content: PropTypes.object.isRequired
}
