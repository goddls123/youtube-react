import React, { Component } from 'react';
import Video from './video';
import styles from './video.module.css'

class Videolist extends Component {
    render() {
        const videos = this.props.videos;
        return (
            <ul className ={styles.videoList}>
                
                {videos.map(video => (
                    // console.log(video.snippet);
                    // if(video.snippet !== undefined){
                        // return
                        <Video 
                            video={video}
                            key={video.id}
                            youtube={this.props.youtube}
                            onVideoClick={this.props.onVideoClick}
                            selected ={this.props.selected}
                        />
                    )
                // }
                )}

            </ul>
        );
    }
}

export default Videolist;