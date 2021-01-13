import React, { Component } from 'react';
import idImg from '../img/id_img.jpg'
import styles from './navbar.module.css';

class NavBtn extends Component {
    render() {
        return (
            <div className={styles.navBtn}>
                <button className={styles.item}><i className={styles.fa_search}></i></button>
                <button className={styles.item}><i className={styles.fa_video}></i></button>
                <button className={styles.item}><i className={styles.fa_th}></i></button>
                <button className={styles.item}><i className={styles.fa_bell}></i></button>
                <button className={styles.item}><img src={idImg} alt="human"/></button> 
            </div>
        );
    }
}

export default NavBtn;