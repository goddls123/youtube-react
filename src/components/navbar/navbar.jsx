import React, { Component } from 'react';
import Logo from './logo';
import NavBtn from './navBtn';
import Search from './search';
import styles from './navbar.module.css';


class Navbar extends Component {
    render() {
        
        return (
            <div className = {styles.navbar}>
                <Logo />
                <Search 
                    onSearch={this.props.onSearch}
                />
                <NavBtn />          
            </div>
        );
    }
}

export default Navbar;