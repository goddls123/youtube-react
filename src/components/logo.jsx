import React, { Component } from 'react';

class Logo extends Component {


    render() {
        return (
            <div className="logo_area">
                <button className = "ham_bar">
                   <i className="fas fa-bars"></i>
                </button>
                <a href="http://localhost:3000/" className="logo">
                    <i className="fab fa-youtube"></i>
                 <h1 className="text">YouTube</h1>
                </a>
        </div>
        );
    }
}

export default Logo;