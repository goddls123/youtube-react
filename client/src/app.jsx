
import styles from'./app.module.css';
import React, { Component, useEffect, useState } from 'react';
import Navbar from './components/navbar/navbar';
import Videolist from './components/video/videolist';
import VideoDetail from './components/video/video_detail/videoDetail';




const App = (props) => {
  const youtube = props.youtube;
  const [videos , setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState('');


  useEffect(() =>{
    youtube.mostPopular()
    .then(videos =>  setVideos(videos))
    .catch(error => console.log('error', error));
  }, [])

  const handleSearch = (query)=>{
      youtube.search(query)
      .then(videos => {
        setVideos({videos})
        setSelectedVideo(null);
      })
      .catch(error => console.log('error', error));
  }

  const handleVideoClick = (video) =>{
    youtube.relatedVideo(video.id)
    .then(videos => {
      setVideos(videos)
      setSelectedVideo(video)
    })
    .catch(error => console.log('error1', error));

  }

  
    return (
      <div>
        <Navbar 
          onSearch={handleSearch}
        />
        <section className={styles.content}>
          {
          selectedVideo&& (
            <div className={styles.videoDetails}>
              <VideoDetail 
                  video ={selectedVideo}
                  youtube ={youtube}       
              />
            </div>
          )}
          <div className={styles.videoList}>
            <Videolist 
              videos = {videos}
              youtube={youtube}
              onVideoClick ={handleVideoClick}
              selected ={selectedVideo ? true : false}
            />
          </div>
        </section>
      </div>
    );
  
}

export default App;
