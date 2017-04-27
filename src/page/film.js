import React,{ Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/film'
import { bindActionCreators }  from 'redux'
import { Pagination } from 'antd'

import '../styles/film.sass'

let _key = 0;

class Film extends React.Component{
  constructor(){
    super()
    this.state = {
      nowPlayList: []
    }
  }
  componentDidMount(){
    //获取电影列表
    this.props.actions.fetchNowPlayList()
  }
  renderFilmList(page,pageSize){
    let _page = page ? (page-1)*pageSize : 0;
    let _pageSize = pageSize ? page*pageSize : 6;
    let nowPlayList = this.props.nowPlayList.slice(_page,_pageSize);
    // let list = nowPlayList.slice(_page,_pageSize);
    let filmList = [];
    // console.log(_page + "or" + _pageSize);
    // console.log(list)
    for (let film of nowPlayList){
      filmList.push(
        <li key={++_key}>
          <div className="film-item">
            <div className="film-img">
              <img src={ film.images.large }/>
            </div>
            <div className="film-info">
              <h2>{film.title}</h2>
              <span className="rating">{ film.rating.average }</span>
              <ul>
                <li>导演: { film.directors.name }</li>
                <li>主演:</li>
                <li>类型:</li>
                <li>上映: { film.year }</li>
              </ul>
              <div className="tags">
                <span>3D</span>
                <span>3D</span>
                <span>3D</span>
              </div>
            </div>
            <button>影片详情</button>
          </div>
        </li>
      )
    }
    return filmList;
  }
  handleOnChange(page,pageSize){
    // this.renderFilmList(page,pageSize);
    console.log(page + "and" +pageSize)
  }
  render(){
    let filmList = this.renderFilmList();
    // console.log(this.state.nowPlayList);
    return (
      <div id="film">
        <div className="left-view">
          <h1>正在热映</h1>
          <ul>
            { filmList }
          </ul>
          <Pagination total={ 20 } defaultPageSize={ 5 } onChange={ this.handleOnChange.bind(this) }/>
        </div>
        <div className="right-view">
          <h1>热门活动</h1>
        </div>
      </div>
    )
  }
}
const mapStatesToProps = (state) => {
  return{
    nowPlayList: state.filmState.nowPlayList
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions,dispatch)
  }
};
export default connect(mapStatesToProps,mapDispatchToProps)(Film);
