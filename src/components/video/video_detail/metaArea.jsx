import React, { Component } from 'react';
import styles from './videoDetail.module.css';

class MetaArea extends Component {
    
    render() {
        const snippet = this.props.video.snippet;



        return (
            <section className={styles.meta_area}>
                { snippet.tags &&
                (<div className={styles.hash_tag}>
                    <span className={styles.tag}>#{snippet.tags[0]}</span>
                    <span className={styles.tag}>#{snippet.tags[1]}</span>
                </div>)}
                <div className={styles.title}>{snippet.title}</div>
                <div className={styles.meta_info}>
                    <div className={styles.meta_text}>
                        <div className={styles.view_count}>조회수</div>
                        <div className={styles.date}>{snippet.publishTime}</div>
                    </div>
                    <div className={styles.meta_menu}>
                        <span className={styles.ico_like}>
                            <button><i className="fas fa-thumbs-up"></i></button>
                            <span className={styles.num}></span> 
                        </span>
                        <span className={styles.ico_dislike}>
                            <button><i className="fas fa-thumbs-down"></i></button> 
                            <span className={styles.num}></span>
                        </span>
                        <span className={styles.ico}>
                            <button><i className="fas fa-share"></i></button> 공유</span>
                        <span className={styles.ico}>
                            <button><i className="far fa-plus-square"></i></button> 저장</span>
                        <span className={styles.ico}>
                            <button><i className="fas fa-ellipsis-h"></i></button>
                        </span>
                    </div>
                </div>
            </section>
        );
    }
}

export default MetaArea;