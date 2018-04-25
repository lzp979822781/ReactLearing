import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    searchInfo=()=>{
        let searchName = this.refs.searchName.value;
        this.props.search(searchName);
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref="searchName" type="text" placeholder="enter the name you search"/>
                    <button onClick={this.searchInfo}>Search</button>
                </div>
            </section>
        );
    }
}

export default Search;