import React, { Component } from 'react';
import styles from './video.module.css'

class Video extends Component {

    state={
        channelsThumbnails: {},
        channels:{},
    }

    componentDidMount(){
        if(!this.props.selected){
            this.props.youtube.getChannel(this.props.video.snippet.channelId)
            .then(channels =>  this.setState({
                channelsThumbnails : channels[0].snippet.thumbnails.medium,
                channels: channels,
                }))
            .catch(error => console.log('error', error));
        }
         
      }

    handleVideoClick = () =>{
        this.props.onVideoClick(this.props.video,this.state.channels);
    }
  
    render() {
        const video = this.props.video;
        const thumbnails = this.props.video.snippet.thumbnails;
        const channelImg = this.props.selected ? 0 : this.state.channelsThumbnails;
        let displayType ;
        if(this.props.selected)
            displayType = styles.list;
        else
            displayType = styles.grid;

        console.log(displayType);
        return (
            <li className= {`${styles.container} ${displayType}`} onClick={this.handleVideoClick}>
                <div className={`${styles.video} ${displayType}`}>
                    <img className={`${styles.thumbnail} ${displayType}`} src={thumbnails.medium.url} alt="thumbnail" ></img>
                    <div className={`${styles.infoBox} ${displayType}`} >

                        <a href="#" className={`${styles.channelImg} ${displayType}`}>
                            <img src={channelImg.url} alt="channel img"/>
                        </a>
                        <div className={`${styles.info} ${displayType}`}>
                            <h3 className={`${styles.title} ${displayType}`}>{video.snippet.title}</h3>
                            <a href="#" className={styles.channelTitle}>{video.snippet.channelTitle}</a>
                            <div className={styles.meta}>
                                <span className={styles.count}>조회수</span>
                                <span className={styles.date}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default Video;