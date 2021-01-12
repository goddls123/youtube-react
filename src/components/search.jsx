import React, { Component, Fragment } from 'react';

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
           <form action="" className="search" onSubmit={this.handleSubmit}>
                <Fragment>
                    <input 
                        type="text" 
                        placeholder="검색"
                        ref={this.inputRef}
                    />
                    {/* <i className="far fa-keyboard"></i> */}
                </Fragment>
                <button className="searchBtn"><i className="fas fa-search"></i></button>
           </form>
        );
    }
}

export default earch;