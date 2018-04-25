import React, { Component } from 'react';
import Search from './Search';
import List from './List';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchName:""
        };
    }
    search=(searchName)=>{
        console.log(searchName);
        this.setState({searchName})
    }
    render() {
        return (
            <div className="container">
                <Search search={this.search}/>
                <List searchName={this.state.searchName}  />
            </div>
        );
    }
}

export default App;