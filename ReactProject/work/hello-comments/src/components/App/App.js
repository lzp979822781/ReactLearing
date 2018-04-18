import React,{Component} from 'react';
import Add from '../Add/Add';
import List from '../List/List'
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            comments:[
                {username:"山西人",comment:"我有煤礦"},
                {username:"雄安縣人",comment:"我在雄安有兩畝地"}
            ]
        }
    }
    add=(comment)=>{
        console.log(comment);
        let {comments} = this.state;
        comments.unshift(comment);
        this.setState({comments});
    }
    del=(index)=>{
        let {comments}=this.state;
        comments.splice(index,1);
        this.setState(comments);
    }
    render(){
        let {comments} = this.state;
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <Add add={this.add}/>
                    <List comments={comments} del={this.del}/>
                </div>
            </div>
        )
    }
}

export default App;