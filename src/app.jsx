
import './app.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import Videolist from './components/videolist';


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
      .then(result => {
       this.setState({videos: result})
       })
      .catch(error => console.log('error', error));

  }

  render(){

    return (
   
      <div>
        <Navbar 
          onSearch={this.handleSearch}
        />
        <Videolist 
          videos = {this.state.videos}
        />
      </div>
    );
  }
}

export default App;
