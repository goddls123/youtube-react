import React, { Component } from 'react';
import styles from './videoDetail.module.css';
import InfoArea from './infoArea';
import MetaArea from './metaArea';


class VideoDetail extends Component {
   
    render() {
        return (
            <div className={styles.content}>

                <iframe 
                    id="player"
                    type="text/html"
                    width="100%" height="500px"
                    src={`http://www.youtube.com/embed/${this.props.video.id}`}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
                <MetaArea 
                    video={this.props.video}
                />
                <InfoArea 
                    video={this.props.video}
                    youtube={this.props.youtube}       
                />
            </div>
        );
    }
}

export default VideoDetail;