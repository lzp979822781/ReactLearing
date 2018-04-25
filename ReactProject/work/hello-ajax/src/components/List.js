import React, { Component } from 'react';
import axios from 'axios';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstView:true,
            loading:false,
            users:null,
            error:null
        };
    }
    componentWillReceiveProps(nextProp){
        console.log(nextProp);
        this.setState({
            firstView:false,
            loading:true
        })
        let searchName = nextProp.searchName;
        let url = `https://api.github.com/search/users?q=${searchName}`;
        axios.get(url)
             .then(response=>{
                console.log(response.data);
                //  更新状态
                this.setState({
                    loading:false,
                    users:response.data.items
                })
             })
             .catch(error=>{
                //  更新状态
                this.setState({
                    loading:false,
                    error:true
                })
             })

    }
    render() {
        let {firstView,loading,users,error} = this.state;
        if(firstView){
            return <h2>enter name to search</h2>
        }else if(loading){
            return <h2>loading</h2>
        }else if(users){
            return (
                <div className="row">
                    {
                        users.map((item,index)=>{
                            return (
                                <div key={index} className = "card" >
                                    <a href={item.html_url} target="_blank">
                                        <img src={item.avatar_url} style={{ 'width': '100px' }} />
                                    </a>
                                    <p className="card-text">{item.login}</p>
                                </div>
                            )
                        })
                    }
                })
            }
                </div>
            );
        }
    }
}

export default List;