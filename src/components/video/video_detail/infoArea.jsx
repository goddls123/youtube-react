import React, { Component } from 'react';
import styles from './videoDetail.module.css';

class InfoArea extends Component {
    render() {
        const snippet = this.props.video.snippet;
        const channelImg = this.props.channels;
        return (
            <section className={styles.info_area}>
                <div className={styles.channel_area}>
                    <div className={styles.channel_box}>
                        <a href="#" className={styles.channel_img}>
                            <img src="" alt="channel_img"/>
                        </a>
                        <span className = {styles.channel_info}>
                            <a className={styles.channel_name}>{snippet.channelTitle}</a>
                            <div className={styles.channel_count}>구독자 <span className={styles.num}>80</span>명</div>
                        </span>
                        </div>
                    <div className={styles.subscribe_box}>
                        <button className={styles.subscribeBtn}>구독</button>
                        <button className={styles.ico_bell}><i className="far fa-bell"></i></button>
                    </div>
                </div>
                <div className={styles.info_text}>
                    <div className={styles.detail}>
                        {snippet.description}
                    </div>
                    <button className={styles.moreBtn}>더보기</button>
                </div>
            </section>
        );
    }
}

export default InfoArea;