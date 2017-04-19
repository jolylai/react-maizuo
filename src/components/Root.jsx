import React,{ Component,PropTypes } from 'react'
import Header from './Header.jsx'
import {bindActionCreators} from 'redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/com'

class Root extends Component{
  /**
   * ReactCSSTransitionGroup内部的container需要个key
   * 因为ReactCSSTransitionGroup在过渡期间同时维护新老组件需要一个唯一标识加以区分
   * 而location.pathname代表当前访问的完整路径，合适不过
   */
  render(){
    return (
      <div>
        <Header/>
        <ReactCSSTransitionGroup  transitionName="page" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          <div id="container" className="container" key={this.props.location.pathname}>
            {this.props.children}
          </div>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions:bindActionCreators(actions,dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Root)
