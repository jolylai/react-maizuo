import React,{ Component } from 'react'
import { Layout } from 'antd'
import Naviagtion from './Navigation.jsx'

const { Content } = Layout;


class LContent extends Component{
  constructor(){
    super()
  }
  render(){
    return(
        <Content className="content">
        </Content>
    )
  }
}
export default LContent;
