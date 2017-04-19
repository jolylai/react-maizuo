import React,{ Component } from 'react'
import { connect } from 'redux'
import { BackTop } from 'antd'

class GoTop extends Component{
  render(){
    return (
      <div>
        <BackTop>
          <div className="ant-back-top-inner">UP</div>
        </BackTop>
      </div>
    )
  }
}
