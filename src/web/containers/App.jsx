import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'

import routes from '../routes'

const { Header, Content, Footer } = Layout

export default class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
            <Menu.Item key="1">Contents</Menu.Item>
            <Menu.Item key="2">Entries</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {routes}
          </div>
        </Content>
        <Footer></Footer>
      </Layout>
    )
  }
}
