import _ from 'lodash'
import Koa from 'koa'
import webpack from 'webpack'
import webpackConfig from './../../webpack.config'
import webpackMiddleware from 'koa-webpack'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { resolve } from 'path'
import { readFileSync } from 'fs'
import { StaticRouter } from 'react-router'

import routes from './routes'
import App from './containers/App'

const app = new Koa()

const compiler = webpack(webpackConfig)
app.use(webpackMiddleware({
  compiler: compiler
}))

app.use(async (ctx) => {
  const context = {}
  const html = renderToString(
    <StaticRouter context={context} location={ctx.request.url}>
      <App />
    </StaticRouter>
  )

  const templatePath = resolve(__dirname, '../../web/index.html')
  const template = _.template(readFileSync(templatePath, { encoding: 'utf8' }))

  ctx.body = template({ html })
})

app.listen(3000)
