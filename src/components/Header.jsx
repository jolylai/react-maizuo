import React,{ Component,PropTypes } from 'react'
import { connect } from 'react-redux'
import { Icon,Affix } from 'antd'
import '../styles/header.sass'

class Header extends Component{
  constructor(props){
    super(props)
  }
  static defaultProps ={
    title: '卖座电影',
    isFold: true
  }
  static PropTypes = {
    title: PropTypes.string
  }
  toggle = () => {
    const isFold = !this.props.isFold;
    this.setState({
      isFold: isFold
    })
  }
  render(){
    const menuFoldType = this.props.isFold ? 'menu-unfold' : 'menu-fold';
    return(
      <Affix id="header">
        <a className="go-menu"><Icon type={menuFoldType} onClick={this.toggle.bind(this)}/></a>
        <p className="title">{this.props.title}</p>
        <a className="go-mine"><Icon type="user"/></a>
        <a className="go-city">厦门<Icon type="down" /></a>
      </Affix>
    )
  }
}
export default Header;
