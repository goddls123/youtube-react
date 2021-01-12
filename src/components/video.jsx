import React, { Component } from 'react';
import styles from './video.module.css'

class Video extends Component {
    render() {
        const video = this.props.video;
        const thumbnails = this.props.video.snippet.thumbnails;
        return (
            <li className= {styles.container}>
                <div className={styles.video}>
                    <img className={styles.thumbnail} src={thumbnails.medium.url} ></img>
                    <div className={styles.infoBox} >
                        <div className={styles.channelImg}></div>
                        <div className={styles.info}>
                            <p className={styles.title}>{video.snippet.title}</p>
                            <p className={styles.channelTitle}>{video.snippet.channelTitle}</p>
                            <div className={styles.meta}>
                                <span className={styles.count}></span>
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