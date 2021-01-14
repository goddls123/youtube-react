
import styles from'./app.module.css';
import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import Videolist from './components/video/videolist';
import VideoDetail from './components/video/video_detail/videoDetail';


class App extends Component{

  youtube = this.props.youtube;
  state = {
    videos : [],
    selectedVideo: '',
  }

  componentDidMount(){
    this.youtube.mostPopular()
      .then(videos =>  this.setState({videos}))
      .catch(error => console.log('error', error));
     
  }

  handleSearch=(query)=>{
      this.youtube.search(query)
      .then(videos => this.setState({
          videos : videos,
          selectedVideo : null,
        }))
      .catch(error => console.log('error', error));
  }

  handleVideoClick = (video) =>{

    this.youtube.relatedVideo(video.id)
    .then(videos => this.setState({
      videos: videos,
      selectedVideo: video,
    }))
    .catch(error => console.log('error', error));

}

  render(){

    

    return (
   
      <div>
        <Navbar 
          onSearch={this.handleSearch}
        />
        <section className={styles.content}>
          { this.state.selectedVideo&& (
            <div className={styles.videoDetails}>
              <VideoDetail 
                  video ={this.state.selectedVideo}
                  youtube ={this.props.youtube}       
              />
            </div>
          )}
          <div className={styles.videoList}>
            <Videolist 
              videos = {this.state.videos}
              youtube={this.youtube}
              onVideoClick ={this.handleVideoClick}
              selected ={this.state.selectedVideo ? true : false}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
