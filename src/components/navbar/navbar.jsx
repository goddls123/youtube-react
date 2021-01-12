import React, { Component ,Fragment} from 'react';
import Logo from './logo';
import NavBtn from './navBtn';
import Search from './search';
import './navbar.css';


class Navbar extends Component {
    render() {
        
        return (
            <div className = "navbar">
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