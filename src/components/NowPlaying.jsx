import React,{ Component } from 'react'
import { Pagination,Card } from 'antd';

let _key = 0;

class NowPlaying extends Component{
  constructor(props,context){
    super(props,context)
    this.state={
      content:[]
    }
  }
  componentDidMount(){

  }
  renderNowPlayingContent = (page, pageSize) => {
    let start = ( page-1 ) * pageSize;
    let movies = this.props.nowplay.slice(start,start+pageSize);
    let item = [];
    for (let movie of movies){
      item.push(
        <Card className="now-playing-content-item" key={++_key} bodyStyle={{ padding: 10 }}>
          <div className="movie-cover">
            <img src={movie.images.large}/>
          </div>
          <div className="movie-name">
            <span>{movie.title}</span>
            <span>{movie.rating.average}</span>
          </div>
        </Card>
      )
    }
    this.setState({
      content: item
    })
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
          <Pagination defaultPageSize={ 6 } total={20} onChange={this.renderNowPlayingContent.bind(this) }/>
        </div>
      </div>
    )
  }
}

export default NowPlaying;
