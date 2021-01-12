
import './app.css';
import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import Videolist from './components/video/videolist';


class App extends Component{

  youtube = this.props.youtube;
  state = {
    videos : [],
  }

  componentDidMount(){
    this.youtube.mostPopular()
      .then(videos =>  this.setState({videos}))
      .catch(error => console.log('error', error));
     
  }

  handleSearch=(query)=>{
      this.youtube.search(query)
      .then(videos => this.setState({videos}))
      .catch(error => console.log('error', error));

  }

  render(){
    console.log(this.state.videos);

    return (
   
      <div>
        <Navbar 
          onSearch={this.handleSearch}
        />
        <Videolist 
          videos = {this.state.videos}
          youtube={this.youtube}
        />
      </div>
    );
  }
}

export default App;
