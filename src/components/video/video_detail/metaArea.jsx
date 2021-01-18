import React, { Component } from 'react';
import styles from './videoDetail.module.css';

class MetaArea extends Component {


    comma = (num) => {
        var len, point, str; 
           
        num = num + ""; 
        point = num.length % 3 ;
        len = num.length; 
       
        str = num.substring(0, point); 
        while (point < len) { 
            if (str != "") str += ","; 
            str += num.substring(point, point + 3); 
            point += 3; 
        } 
         
        return str;
     
    }
    
    getFormatDate = () =>{
        const date = new Date(this.props.snippet.publishedAt);
        return date.getFullYear()+'.' + date.getMonth() + '.' + date.getDate() + '.';
    }

    handleLikeCount = (likeCount)=>{
        if(likeCount >= 100000000){
            const count = likeCount/100000000;
            return `${count.toFixed(1)}억`;
        }
        else if(likeCount>= 100000){
            const count = likeCount/10000;
            return `${count.toFixed(0)}만`;
        }
        else if(likeCount >= 10000){
            const count = likeCount/10000;
            return `${count.toFixed(1)}만`;
        }
        else if(likeCount >= 1000){
            const count = likeCount/1000;
            return `${count.toFixed(1)}천`;
        }
        else{
            return `${likeCount}`;
        }
    }

    render() {
        const snippet = this.props.video.snippet;
        const viewCount= this.comma(this.props.statistics.viewCount);
        const time = this.getFormatDate();
        const like = this.handleLikeCount(this.props.statistics.likeCount);
        const dislike = this.handleLikeCount(this.props.statistics.dislikeCount);

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
                        <div className={styles.view_count}>조회수 {viewCount}회</div>
                        <div className={styles.date}>최초공개: {time}</div>
                    </div>
                    <div className={styles.meta_menu}>
                        <span className={styles.ico_like}>
                            <button><i className="fas fa-thumbs-up"></i></button>
                            <span className={styles.num}>{like}</span> 
                        </span>
                        <span className={styles.ico_dislike}>
                            <button><i className="fas fa-thumbs-down"></i></button> 
                            <span className={styles.num}>{dislike}</span>
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