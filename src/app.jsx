
import './app.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import Videolist from './components/videolist';


class App extends Component{

  state = {
    videos : [],
  }

  componentDidMount(){
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBOU1xCTfmCO_WN4B2VNTa5PeowpHCFrxU", requestOptions)
      .then(response => response.json())
      .then(result => {
        this.setState({
          videos: result.items,
        })
        
      })
      .catch(error => console.log('error', error));
  }

  render(){
   
    return (
      <div>
        <Navbar />
        <Videolist 
          videos = {this.state.videos}
        />
      </div>
    );
  }
}

export default App;
