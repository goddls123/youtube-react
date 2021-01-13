import React, { Component } from 'react';
import styles from './navbar.module.css';

class Logo extends Component {


    render() {
        return (
            <div className={styles.logo_area}>
                <button className = {styles.ham_bar}>
                   <i className={styles.fa_bars}></i>
                </button>
                <a href="http://localhost:3000/" className={styles.logo}>
                    <i className={styles.fa_youtube}></i>
                 <h1 className={styles.text}>YouTube</h1>
                </a>
        </div>
        );
    }
}

export default Logo;