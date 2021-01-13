import React, { Component } from 'react';
import styles from './videoDetail.module.css';


class VideoDetail extends Component {
   
    render() {
        return (
            <div className={styles.content}>
               
                <iframe 
                    id="player"
                    type="text/html"
                    width="100%" height="360"
                    src={`http://www.youtube.com/embed/${this.props.video.id}`}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
        );
    }
}

export default VideoDetail;