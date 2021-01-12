import React, { Component } from 'react';
import idImg from '../img/id_img.jpg'
class NavBtn extends Component {
    render() {
        return (
            <div className="navBtn">
                <button className="items"><i className="fas fa-search"></i></button>
                <button className="items"><i className="fas fa-video"></i></button>
                <button className="items"><i className="fas fa-th"></i></button>
                <button className="items"><i className="fas fa-bell"></i></button>
                <button className="items"><img src={idImg} alt="human"/></button> 
            </div>
        );
    }
}

export default NavBtn;