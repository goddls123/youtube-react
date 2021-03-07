import React, { Component } from 'react';
import styles from './navbar.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

class Search extends Component {
    inputRef = React.createRef();

    handleSubmit = (e)=>{
        e.preventDefault();
        const search = this.inputRef.current.value;
        this.props.onSearch(search);
        this.inputRef.current.value ='';
    }


    render() {
        return (
           <form action="" className={styles.search} onSubmit={this.handleSubmit}>
               <span className={styles.textBox}></span>
                    <input 
                        type="text" 
                        placeholder="검색..."
                        ref={this.inputRef}
                    />
                <button className={styles.searchBtn}><FontAwesomeIcon className={styles.faSearch} icon={faSearch} size="1x" /></button>
           </form>
        );
    }
}

export default Search;