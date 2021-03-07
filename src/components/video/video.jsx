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
        this.props.onVideoClick(this.props.video);
    }

    handleViewCount = (viewCount)=>{
        if(viewCount >= 100000000){
            const count = viewCount/100000000;
            return `${count.toFixed(2)}억회`;
        }
        else if(viewCount >= 100000){
            const count = viewCount/10000;
            return `${count.toFixed(0)}만회`;
        }
        else if(viewCount >= 10000){
            const count = viewCount/10000;
            return `${count.toFixed(1)}만회`;
        }
        else if(viewCount >= 1000){
            const count = viewCount/1000;
            return `${count.toFixed(2)}천회`;
        }
        else{
            return `${viewCount}회`;
        }

    }

    setTime = () =>{
        const now = new Date();
        const date = new Date(this.props.video.snippet.publishedAt);

        if((now.getFullYear()-date.getFullYear())>0){
            const year = now.getFullYear()-date.getFullYear();
            return `${year}년 전`
        }
        else if((now.getMonth()-date.getMonth())>0){
            const month = now.getMonth()-date.getMonth();
            return `${month}달 전`
        }
        else if((now.getDate()-date.getDate())>6){
            const week =parseInt((now.getDate()-date.getDate())/7);
            return `${week}주 전`
        }
        else if((now.getDate()-date.getDate())>0){
            const day = now.getDate()-date.getDate();
            return `${day} 일 전`
        }
        else if((now.getHours()-date.getHours())>0){
            const hour = now.getHours()-date.getHours();
            return `${hour}시간 전`
        }
        else{
            const minute = parseInt((now - date)/60/1000);
            return `${minute}분 전`
        }
    }

  
    render() {
        const video = this.props.video;
        const thumbnails = this.props.video.snippet.thumbnails;
        const channelImg = this.props.selected ? 0 : this.state.channelsThumbnails;
        const viewCount= this.handleViewCount(this.props.video.statistics.viewCount);
        const time = this.setTime();
        let displayType ;
        if(this.props.selected)
            displayType = styles.list;
        else
            displayType = styles.grid;

        return (
            <li className= {`${styles.container} ${displayType}`} onClick={this.handleVideoClick}>
                <div className={`${styles.video} ${displayType}`}>
                    <img className={`${styles.thumbnail} ${displayType}`} src={thumbnails.medium.url} alt="thumbnail" ></img>
                    <div className={`${styles.infoBox} ${displayType}`} >

                        <a className={`${styles.channelImg} ${displayType}`}>
                            <img src={channelImg.url} alt="channel img"/>
                        </a>
                        <div className={`${styles.info} ${displayType}`}>
                            <h3 className={`${styles.title} ${displayType}`}>{video.snippet.title}</h3>
                            <a className={styles.channelTitle}>{video.snippet.channelTitle}</a>
                            <div className={styles.meta}>
                                <span className={styles.count}>조회수 {viewCount}</span>
                                <span className={styles.date}>{time}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default Video;