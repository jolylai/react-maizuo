import React,{ Component } from 'react'
import LHeader from './LHeader.jsx'
import { Layout } from 'antd'
import LFooter from './LFooter.jsx'
import Navigation from './Navigation.jsx'

const { Content } = Layout;

/*
 * 公共布局
 */
class MyLayout extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="layout-wrapper">
        <Layout>
          <LHeader/>
          <Content>
            {  this.props.children }
          </Content>
          <LFooter/>
        </Layout>
      </div>
    )
  }
}

export default MyLayout;
