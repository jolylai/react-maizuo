import React,{ Component } from 'react'
import { Menu,Icon,Layout } from 'antd'

const { Header } =Layout;
const SubMenu = Menu.SubMenu;

class LHeader extends Component{
  constructor(){
    super()
  }
  render(){
    return(
        <Header className="header">
          <div className="logo"/>
          <Menu theme="dark" mode="horizontal">
            <SubMenu key="sub1" title={ <span>厦门<Icon type="caret-down" /></span>}></SubMenu>
            <Menu.Item key='1'>首页</Menu.Item>
            <Menu.Item key='2'>影片</Menu.Item>
            <Menu.Item key='3'>影院</Menu.Item>
            <Menu.Item key='4'>登录</Menu.Item>
            <Menu.Item key='5'>注册</Menu.Item>
            <SubMenu key="sub2"  title={ <span>APP下载<Icon type="caret-down" /></span>}></SubMenu>
          </Menu>
        </Header>
    )
  }
}
export default LHeader;
