import React,{ Component } from 'react'
import * as actions from '../redux/actions/home'
import { connect } from 'react-redux'
import { bindActionCreators }  from 'redux'

class NowPlaying extends Component{
  constructor(props,context){
    super(props,context)
  }
  renderNowPlaying(){
    //let  { nowplay } = this.props;
    //console.log('nowplay' + nowplay)
  }
  render(){
    //let nowplayStr = this.renderNowPlaying()
    return(
      <div className="now-playing">
        <div className="now-playing-header">
          <span>正在热映</span>
          <span>/</span>
          <span>即将上映</span>
          <p>即将上映50部电影<a>更多》</a></p>
        </div>
        <div className="now-playing-content">
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    nowplay: state.homeState.nowplay
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NowPlaying);
