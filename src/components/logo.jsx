import React, { Component } from 'react';

class Logo extends Component {


    render() {
        return (
            <div className="logo_area">
                <button className = "ham_bar">
                   <i className="fas fa-bars"></i>
                </button>
                <a href="#" className="logo">
                    <i className="fab fa-youtube"></i>
                 <span className="text">YouTube</span>
                </a>
        </div>
        );
    }
}

export default Logo;