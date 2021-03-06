import React, { Component } from 'react';
import styles from './videoDetail.module.css';

class InfoArea extends Component {


    state={
        channelsThumbnails: {},
        channels:{},
        subBtnState: true,
        subDataType: null,
        moreBtnState:true,
        moreDataType:null,
   
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
        if(this.state.subBtnState){
            this.setState({
                subBtnState:false,
                subDataType: styles.active,
            });
        }
        else{
            this.setState({
                subBtnState:true,
                subDataType: null,
            });
        }
    }
    
    handleMoreInfo =() =>{
        if(this.state.moreBtnState){
            this.setState({
                moreBtnState:false,
                moreDataType: styles.active,
            });
        }
        else{
            this.setState({
                moreBtnState:true,
                moreDataType: null,
            });
        }
    }



    render() {
        const snippet = this.props.video.snippet;
       
        

        
        return (
            <section className={styles.info_area}>
                <div className={styles.channel_area}>
                    <div className={styles.channel_box}>
                        <button className={styles.channel_img}>
                            <img src={this.state.channelsThumbnails.url} alt="channel_img"/>
                        </button>
                        <span className = {styles.channel_info}>
                            <button className={styles.channel_name}>{snippet.channelTitle}</button>
                            <div className={styles.channel_count}>????????? <span className={styles.num}></span>???</div>
                        </span>
                        </div>
                    <div className={styles.subscribe_box}>
                        <button className={`${styles.subscribeBtn} ${this.state.subDataType}`} onClick={this.handleSubscribe}>??????</button>
                        <button className={`${styles.ico_bell} ${this.state.subDataType}`}><i className="far fa-bell"></i></button>
                    </div>
                </div>
                <div className={styles.info_text}>
                    <pre className={`${styles.detail} ${this.state.moreDataType}`}>
                        {snippet.description}
                    </pre>
                    <button className={`${styles.moreBtn} ${this.state.moreDataType}`} onClick={this.handleMoreInfo}>?????????</button>
                </div>
            </section>
        );
    }
}
export default InfoArea;