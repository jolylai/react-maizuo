import React,{ Component } from 'react'
import { Pagination,Card } from 'antd';

let _key = 0;

class NowPlaying extends Component{
  constructor(props,context){
    super(props,context);
    this.state={
      content:[]
    }
  }
  componentWillMount(){
    let item = this.renderNowPlayingContent(1,6)
    this.state={
      content:item
    }
  }
  renderNowPlayingContent = (page, pageSize) => {
    let start = ( page-1 ) * pageSize;
    let movies = this.props.nowplay.slice(start,start+pageSize);
    let item = [];
    for (let movie of movies){
      item.push(
        <div className="now-playing-content-item" key={++_key}>
          <div className="movie-img">
            <img src={movie.images.large}/>
          </div>
          <p className="movie-name">
            <span className="title"><a>{movie.title}</a></span>
            <span className="rating">{movie.rating.average}</span>
          </p>
        </div>
      )
    }
    this.setState({
      content: item
    })
    return item;
  }
  render(){
    return(
      <div className="now-playing">
        <div className="now-playing-header">
          <span>正在热映</span>
          <span>/</span>
          <span>即将上映</span>
          <p>即将上映50部电影<a>更多》</a></p>
        </div>
        <div className="now-playing-content">
          { this.state.content }
          <Pagination defaultPageSize={ 5 } total={20} onChange={this.renderNowPlayingContent.bind(this) }/>
        </div>
      </div>
    )
  }
}

export default NowPlaying;
