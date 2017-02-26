import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import routes from './routes'
import App from './containers/App'

import 'antd/dist/antd.css'

render(
  <Router><App /></Router>,
  document.getElementById('root')
)
