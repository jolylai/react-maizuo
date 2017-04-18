import React,{ Component } from 'react'
import LHeader from './LHeader.jsx'
import LContent from './LContent.jsx'
import { Layout } from 'antd'
import LFooter from './LFooter.jsx'

class MyLayout extends Component{
  constructor(){
    super()
  }
  render(){
    return (
      <div className="layout-wrapper">
        <Layout>
          <LHeader/>
          <LContent/>
          <LFooter/>
        </Layout>
      </div>
    )
  }
}

export default MyLayout;