import React, { Component } from 'react';
import idImg from '../img/id_img.jpg'
import styles from './navbar.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faVideo}  from '@fortawesome/free-solid-svg-icons';
import {faTh}  from '@fortawesome/free-solid-svg-icons';
import {faBell}  from '@fortawesome/free-solid-svg-icons'; 


class NavBtn extends Component {

    handleSearch =() =>{
        
    }
    render() {
        return (
            <div className={styles.navBtn}>
                <button className={styles.item}><FontAwesomeIcon className={styles.faSearch} icon={faSearch} size="1x" /></button>
                <button onClick={this.handleSearch} className={styles.item}><FontAwesomeIcon className={styles.faVideo} icon={faVideo} size="1x" /></button>
                <button className={styles.item}><FontAwesomeIcon className={styles.faTh} icon={faTh} size="1x" /></button>
                <button className={styles.item}><FontAwesomeIcon className={styles.faBell} icon={faBell} size="1x" /></button>
                <button className={styles.item1}><img src={idImg} alt="human"/></button> 
            </div>
        );
    }
}

export default NavBtn;