import React, { Component } from 'react';
import styles from './videoDetail.module.css';

class InfoArea extends Component {


    state={
        channelsThumbnails: {},
        channels:{},
        btnState: true,
        dataType: null,
    }

    componentDidUpdate(){
        this.props.youtube.getChannel(this.props.video.snippet.channelId)
        .then(channels =>  this.setState({
        channelsThumbnails : channels[0].snippet.thumbnails.medium,
        channels: channels,
        }))
        .catch(error => console.log('error', error));
    }
    componentDidMount(){
        this.props.youtube.getChannel(this.props.video.snippet.channelId)
        .then(channels =>  this.setState({
        channelsThumbnails : channels[0].snippet.thumbnails.medium,
        channels: channels,
        }))
        .catch(error => console.log('error', error));
    }
    
    handleSubscribe =() =>{
        if(this.state.btnState){
            this.setState({
                btnState:false,
                dataType: styles.active,
            });
        }
        else{
            this.setState({
                btnState:true,
                dataType: null,
            });
        }
    }
    


    render() {
        const snippet = this.props.video.snippet;


        
        return (
            <section className={styles.info_area}>
                <div className={styles.channel_area}>
                    <div className={styles.channel_box}>
                        <a href="#" className={styles.channel_img}>
                            <img src={this.state.channelsThumbnails.url} alt="channel_img"/>
                        </a>
                        <span className = {styles.channel_info}>
                            <a className={styles.channel_name}>{snippet.channelTitle}</a>
                            <div className={styles.channel_count}>구독자 <span className={styles.num}></span>명</div>
                        </span>
                        </div>
                    <div className={styles.subscribe_box}>
                        <button className={`${styles.subscribeBtn} ${this.state.dataType}`} onClick={this.handleSubscribe}>구독</button>
                        <button className={`${styles.ico_bell} ${this.state.dataType}`}><i className="far fa-bell"></i></button>
                    </div>
                </div>
                <div className={styles.info_text}>
                    <pre className={styles.detail}>
                        {snippet.description}
                    </pre>
                    <button className={styles.moreBtn}>더보기</button>
                </div>
            </section>
        );
    }
}
export default InfoArea;