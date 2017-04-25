import React,{ Component } from 'react'
import NowPlaying from '../components/NowPlaying.jsx'
import { connect } from 'react-redux'
import { bindActionCreators }  from 'redux'
import * as actions from '../redux/actions/home'
import { Carousel } from 'antd';

import '../styles/home.sass'

let _key = 0;

class Home extends Component{
  constructor(props,context){
    super(props,context)
  }
  componentDidMount(){
      this.props.actions.fetchNowPlaying()
  }
  renderBanner(){
    let images = [
      'https://pic.maizuo.com/manager/a0b20a55d2278bb625237586f62b18c2.jpg!/quality/60',
      'https://pic.maizuo.com/manager/5a5d2507461a3290fa6ced2772f68430.png!/quality/60',
      'https://pic.maizuo.com/manager/6e4235e4147c7e5550cf49e1e44b0b33.jpg!/quality/60',
      'https://pic.maizuo.com/manager/cb16ce300b094eb0ed63c0a41c688a44.jpg!/quality/60'
    ];
    let banner = [];
    for(let image of images){
      banner.push(
        <div className="slide" key={++_key}>
          <a target="_blank" href="#">
            <img src= { image } />
          </a>
        </div>
      )
    }
    return banner;
  }
  //正在热播
  renderNowPlaying(){
    const {nowplay} = this.props
    return nowplay;
  }
  //热门活动
  renderHotActivity(){
    let images = ['https://pic.maizuo.com/manager/f5a4d723fe345bf3478022739828ffdf.jpg',
    'https://pic.maizuo.com/manager/9a7a24a3e5d53dc7ec6cc4c2fcb7b680.jpg',
    'https://pic.maizuo.com/manager/994c99245e2e23eeb487744774a63c7f.jpg'];
    return(
      <div className="hot-activity">
        <div className="hot-activity-header">
          <h1>热门活动</h1>
        </div>
        <ul className="hot-activity-content">
          <li>
            <a href="http://m.maizuo.com/act/active/1024">
              <div>
                <img src={images[0]}/>
              </div>
              <span>卖座商城</span>
            </a>
          </li>
          <li>
            <a href="http://m.maizuo.com/act/active/1008">
              <div>
                <img src={images[1]}/>
              </div>
              <span>一元看电影</span>
            </a>
          </li>
          <li>
            <a href="http://cps.maizuo.com/changeUrl.htm?channelId=372&urlId=1505">
              <div>
                <img src={images[2]}/>
              </div>
              <span>花费不多 够撩就行</span>
            </a>
          </li>
        </ul>
      </div>
    )
  }
  //卖座卡购买、充值
  renderMaizuoCard(){
    return(
      <div className="maizuo-card">
        <h1 className="maizuo-card-header">卖座卡购买/充值</h1>
        <div className="maizuo-card-content">
          <a href="http://v4.maizuo.com/card.htm">
            <img src='//static.maizuo.com/pc/v1/static/asset/6b02e2bb1ad24bf3ddfe61117f7623d9.jpg'/>
            <p>卖座卡</p>
          </a>
        </div>
      </div>
    )
  }
  //评论
  renderComment(){
    let comments = ['dfadf','dafdasd','fasdfasdf','asdfasdf'];
    let commentList = []
    for (let comment of comments){
      commentList.push(
        <li>
          <div className="avatar">
            <img src="../favicon.ico"/>
          </div>
        </li>
      )
    }
    return(
      <div className="comment">
        <h1>精华评论</h1>
        <ul className="comment-content">
          { commentList }
        </ul>
      </div>
      )
  }
  render(){
    let banner = this.renderBanner();
    let nowPlaying = this.renderNowPlaying();
    let hotActivity = this.renderHotActivity();
    let maizuoCard = this.renderMaizuoCard();
    let comment = this.renderComment()
    return(
      <div id="home">
        <Carousel autoplay>
          { banner }
        </Carousel>
        <div className="content">
          <NowPlaying nowplay={ nowPlaying }/>
          { hotActivity }
          { maizuoCard }
          { comment }
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

export default connect(mapStateToProps,mapDispatchToProps)(Home);
