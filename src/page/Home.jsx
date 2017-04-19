import React,{ Component,PropTypes }from 'react'
import Header from '../components/Header.jsx'
import ReactSwipe from 'react-swipe'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import {bindActionCreators}  from 'redux'

let _key = 0;

class Home extends Component{
  constructor(props,context){
    super(props,context);
  }
  componentDidMount(){
    this.props.action.fetchBanner(() => {
      this.props.fetchNowPlaying()
    })
  }
  renderBanner(){
    const { banner } = this.props;
    if (banner.length == 0){
      return;
    }
    let str = [];
    for(let item of banner){
      str.push(
        <div className="slide" key={++_key}>
          <a target="_blank" href={item.url}><img src={item.imageUrl} alt=""/></a>
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
          <ReactSwipe className="banner-swipe" swipeOption={{autoplay: 3000,autoHeight: true}}/>
          {bannerStr}
        </div>
        { nowplayStr }
        { comingStr }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    banner:state.homeState.banner,
    nowplay:state.homeState.nowplay,
    coming:state.homeState.coming
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions:bindActionCreators(actions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);

