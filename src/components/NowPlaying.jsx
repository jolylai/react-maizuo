import React,{ Component } from 'react'
import { Pagination } from 'antd';

let _key = 0;

class NowPlaying extends Component{
  constructor(props,context){
    super(props,context)
  }
  componentDidMount(){
    console.log(this.props.nowplay)
  }
  renderNowPlayingContent = (page, pageSize) => {
    console.log(page+'page'+pageSize)
    let movies = this.props.nowplay.slice(page,pageSize);
    let item = [];
    for (let movie of movies){
      item.push(
        <div className="now-playing-content-item" key={++_key}>
          <img src={movie.images.small}/>
        </div>
      )
    }
    return item;
  }
  render(){
    let content = this.renderNowPlayingContent()
    return(
      <div className="now-playing">
        <div className="now-playing-header">
          <span>正在热映</span>
          <span>/</span>
          <span>即将上映</span>
          <p>即将上映50部电影<a>更多》</a></p>
        </div>
        <div className="now-playing-content">
          { content }
          <Pagination defaultPageSize={ 6 } total={20} onChange={this.renderNowPlayingContent }/>
        </div>
      </div>
    )
  }
}

export default NowPlaying;
