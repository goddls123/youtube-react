import React, { Component, Fragment } from 'react';
import styles from './navbar.module.css';

class earch extends Component {
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
                <Fragment>
                    <input 
                        type="text" 
                        placeholder="검색"
                        ref={this.inputRef}
                    />
                    {/* <i className="far fa-keyboard"></i> */}
                </Fragment>
                <button className={styles.searchBtn}><i className={styles.fa_search}></i></button>
           </form>
        );
    }
}

export default earch;