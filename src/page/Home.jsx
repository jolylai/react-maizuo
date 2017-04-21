import React,{ Component,PropTypes }from 'react'
import Header from '../components/Header.jsx'
import ReactSwipe from 'react-swipe'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators }  from 'redux'
import * as actions from '../redux/actions/home'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import '../styles/home.sass'
let _key = 0;

class Home extends Component{
  constructor(props,context){
    super(props,context);
  }
  componentDidMount(){
    this.props.actions.fetchBanner()
  }
  renderBanner(){
    const { banner } = this.props;
    //console.log(banner)
    //let banner = [{"id":651,"name":"2017[如果]田馥甄巡回演唱会PLUS","url":"http://m.maizuo.com/act/active/1135","imageUrl":"https://pic.maizuo.com/h5PicUpload/e4813637d259ebb941a489f60522da4e.jpg","weight":1},{"id":654,"name":"基腐污 高能神片","url":"http://cps.maizuo.com/changeUrl.htm?channelId=372&urlId=1475","imageUrl":"https://pic.maizuo.com/h5PicUpload/d7cd296385c1bb3c82c7d7b34310eaf5.jpg","weight":9},{"id":655,"name":"蓝精灵","url":"http://m.maizuo.com/act/active/1141","imageUrl":"https://pic.maizuo.com/h5PicUpload/3c54af206790ee309899ac46a5ca85ef.jpg","weight":2}]
    if (banner.length == 0){
      return;
    }
    let str = [];
    for(let item of banner){
      str.push(
        <div className="slide" key={++_key}>
          <a target="_blank" href={item.alt}><img src={item.images.large} alt=""/></a>
        </div>
      )
    }
    return str;
  }
  renderNowplay(){

  }
  renderComing(){

  }
  render(){
    let bannerStr = this.renderBanner(),
        nowplayStr = this.renderNowplay(),
        comingStr = this.renderComing()
    return(
      <div id="home">
        <div className="banner">
          <ReactSwipe className="banner-swipe" swipeOptions={{auto:2500,autoHeight:true}}>
            {bannerStr}
          </ReactSwipe>
        </div>
        { nowplayStr }
        { comingStr }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    banner:state.homeState.banner
    //nowplay:state.homeState.nowplay,
    //coming:state.homeState.coming
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);

