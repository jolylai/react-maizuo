import React,{ Component } from 'react'
import { Layout } from 'antd'


const { Content } = Layout;


class LContent extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div className="layout-content">
        <Content className="content">content</Content>
      </div>
    )
  }
}
export default LContent;
