import React,{ Component } from 'react'
import { connect } from 'redux'
import { BackTop } from 'antd'

class GoTop extends Component{
  constructor(props){
    super(props)
  }
  goTop(){
    let speed = 10;
    let timer = setTimeout(function () {
      if (document.body.scrollTop > 0){
        document.body.scrollTop = document.body.scrollTop - speed > 0 ? document.body.scrollTop - speed : 0;
        speed += 20;
      }else{
        clearInterval(timer)
      }
    },16)
  }
  render(){
    return (
      <div>
        <BackTop visibilityHeight="200" onClick={this.goTop}>
          <div className="ant-back-top-inner">UP</div>
        </BackTop>
      </div>
    )
  }
}
