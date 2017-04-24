import React from 'react'
import { Route } from 'react-router-dom'

import App from './containers/App'
import ContentList from './components/contents/ContentList'
import ContentListContainer from '../containers/ContentListContainer'
import ContentContainer from '../containers/ContentContainer'

export default (
  <div>
    <Route exact path="/" component={ContentListContainer} />
    <Route path="/c/:id" component={ContentContainer} />
  </div>
)
