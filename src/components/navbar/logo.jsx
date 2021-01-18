import React, { Component } from 'react';
import styles from './navbar.module.css';
import logoImg from '../img/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

class Logo extends Component {


    render() {
        return (
            <div className={styles.logo_area}>
                <button className = {styles.ham_bar}>
                    <FontAwesomeIcon className={styles.faBars} icon={faBars} size="1x" />
                </button>
                <a href="http://localhost:3000/" className={styles.logo}>
                    <img className={styles.youtube} src={logoImg} alt="logo"/>
                 <h1 className={styles.text}>YouTube</h1>
                </a>
        </div>
        );
    }
}

export default Logo;