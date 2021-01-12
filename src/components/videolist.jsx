import React, { Component } from 'react';
import Video from './video';
import styles from './video.module.css'

class Videolist extends Component {
    render() {
        const videos = this.props.videos;
        return (
            <ul className ={styles.videoList}>
                {videos.map(video =>
                    <Video 
                        video={video}
                        key={video.id}
                    />
                )}

            </ul>
        );
    }
}

export default Videolist;