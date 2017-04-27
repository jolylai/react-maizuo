import React,{ Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/film'
import { bindActionCreators }  from 'redux'

import '../styles/film.sass'

let _key = 0;

class Film extends Component{
  constructor(){
    super()
  }
  componentDidMount(){
    this.props.actions.fetchNowPlayList()
  }
  renderFilmList(){
    let { nowPlayList } = this.props;
    let filmList = [];
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
                <li>导演:{ film.directors.name }</li>
                <li>主演:</li>
                <li>类型:</li>
                <li>上映:{ film.year }</li>
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
  render(){
    let filmList = this.renderFilmList();
    return (
      <div id="film">
        <div className="left-view">
          <h1>正在热映</h1>
          <ul>
            { filmList }
          </ul>
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
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions,dispatch)
  }
}
export default connect(mapStatesToProps,mapDispatchToProps)(Film);
