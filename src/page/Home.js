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
  render(){
    let banner = this.renderBanner();
    let nowPlaying = this.renderNowPlaying();
    return(
      <div id="home">
        <Carousel autoplay>
          { banner }
        </Carousel>
        <NowPlaying nowplay={ nowPlaying }/>
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
