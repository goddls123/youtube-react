import React, { Component, Fragment } from 'react';

class earch extends Component {
    inputRef = React.createRef();

    handleSubmit = (e)=>{
        e.preventDefault();
        const name = this.inputRef.current.value;
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
                <button className="searchBtn"><i class="fas fa-search"></i></button>
           </form>
        );
    }
}

export default earch;