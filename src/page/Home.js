import React,{ Component } from 'react'
import NowPlaying from '../components/NowPlaying.jsx'
import { connect } from 'react-redux'
import { bindActionCreators }  from 'redux'
import * as actions from '../redux/actions/home'
import { Carousel,Icon } from 'antd';

import '../styles/home.sass'

let _key = 0;

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      nowplay: []
    }
  }
  componentDidMount(){
    this.props.actions.fetchNowPlaying()
    let { nowplay } = this.props;
    console.log(nowplay)
    this.setState = {
      nowplay: nowplay
    }
  }
  shouldComponentUpdate (nextProps, nextState) {
    console.log(nextProps)
    if(this.props.nowplay !== nextProps.nowplay){
      return true;
    }else{
      return false;
    }
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
    const {nowplay} = this.props;
    this.setState = {
      nowplay: nowplay
    }
    return nowplay
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
          <li key="1">
            <a href="http://m.maizuo.com/act/active/1024">
              <div>
                <img src={images[0]}/>
              </div>
              <span>卖座商城</span>
            </a>
          </li>
          <li key="2">
            <a href="http://m.maizuo.com/act/active/1008">
              <div>
                <img src={images[1]}/>
              </div>
              <span>一元看电影</span>
            </a>
          </li>
          <li key="3">
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
    let comments = [
      {username: '小明',time:'2017-04-25',movie: '速度与激情',comment: '值得一看'},
      {username: '小明',time:'2017-04-25',movie: '速度与激情',comment: '值得一看'},
      {username: '小明',time:'2017-04-25',movie: '速度与激情',comment: '值得一看'},
      {username: '小明',time:'2017-04-25',movie: '速度与激情',comment: '值得一看'},
      {username: '小明',time:'2017-04-25',movie: '速度与激情',comment: '值得一看'},
      {username: '小明',time:'2017-04-25',movie: '速度与激情',comment: '值得一看'},
      {username: '小明',time:'2017-04-25',movie: '速度与激情',comment: '值得一看'}
    ];
    let commentList = []
    for (let comment of comments){
      commentList.push(
        <li className="comment-item">
          <div className="comment-content-avatar">
            <img src="../favicon.ico"/>
          </div>
          <div className="comment-content-detail">
            <div>
              <span className="username">{ comment.username }</span>
              <span className="time">{ comment.time }</span>
              <span>评论了电影</span>
              <span className="movie">{ comment.movie }</span>
            </div>
            <div className="user-comment">
              <span>{ comment.comment }</span>
            </div>
          </div>
        </li>
      )
    }
    return(
      <div className="comment">
        <div className="comment-header">
          <h1>精华评论<span className="comment-sync"><Icon type="sync" /></span></h1>
        </div>
        <ul className="comment-content">
          { commentList }
        </ul>
      </div>
      )
  }
  renderPhoneTicket(){
    return(
      <div className="phone-ticket">
        <h1>手机购票</h1>
        <ul className="phone-ticket-code">
          <li>
            <img src="https://static.maizuo.com/pc/v1/static/asset/ec5f0f45fc548050c5e613a416294452.png"/>
            <div className="code-content">
              扫码下载<br/>卖座电影APP
            </div>
          </li>
          <li>
            <img src="https://static.maizuo.com/pc/v1/static/asset/500b205c9fbf141e4b3c2824d4e8d7fe.png"/>
            <div className="code-content">
              扫码关注<br/>卖座官方微信
            </div>
          </li>
        </ul>
      </div>
    )
  }
  render(){
    let banner = this.renderBanner();
    let nowPlaying = this.renderNowPlaying();
    let hotActivity = this.renderHotActivity();
    let maizuoCard = this.renderMaizuoCard();
    let comment = this.renderComment();
    let phoneTicket = this.renderPhoneTicket();
    return(
      <div id="home">
        <Carousel autoplay>
          { banner }
        </Carousel>
        <div className="content">
          <NowPlaying nowplay={ this.props.nowplay }/>
          { hotActivity }
          { maizuoCard }
          { comment }
          { phoneTicket }
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
