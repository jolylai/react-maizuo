import React,{ Component } from 'react'
import ReactSwipe from 'react-swipe'
import NowPlaying from '../components/NowPlaying.jsx'
import { connect } from 'react-redux'

import '../styles/home.sass'

let _key = 0;

class Home extends Component{
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
  renderNowPlaying(){

  }
  render(){
    let banner = this.renderBanner();
    let nowPlaying = this.renderNowPlaying();
    return(
      <div id="home">
        <ReactSwipe className="slick-slide" swipeOptions={{auto: 3000,autoHeight: true}}>
          { banner }
        </ReactSwipe>
        <NowPlaying/>
      </div>
    )
  }
}


export default Home;
