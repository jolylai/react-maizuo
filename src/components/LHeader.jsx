import React,{ Component } from 'react'
import { Menu,Icon,Layout,Affix } from 'antd'
import { Link } from 'react-router'
const { Header } =Layout;
const SubMenu = Menu.SubMenu;

class LHeader extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <Affix>
        <Header className="header">
          <Menu className="header-menu" theme="dark" mode="horizontal">
            <Menu.Item className="logo">
              <a href=""><img src="../favicon.ico" alt="logo"/></a>
            </Menu.Item>
            <SubMenu className="city-picker" key="sub1" title={ <span>厦门<Icon type="caret-down" /></span>}>
              <img src="../favicon.ico" alt="downloadApp"/>
            </SubMenu>

              <Menu.Item key='1' className="home page"><Link to='/home'>首页</Link></Menu.Item>

            <Menu.Item key='2' className="file page">影片</Menu.Item>
            <Menu.Item key='3' className="cinema page">影院</Menu.Item>
            <Menu.Item key='4' className="login in">登录</Menu.Item>
            <Menu.Item key='5' className="sign in">注册</Menu.Item>
            <SubMenu key="sub2"  title={ <span>APP下载<Icon type="caret-down" /></span>}>
              <img src="../favicon.ico" alt="downloadApp" className="downloadApp"/>
            </SubMenu>
          </Menu>
        </Header>
      </Affix>
    )
  }
}
export default LHeader;
