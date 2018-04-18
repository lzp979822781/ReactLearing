import React,{Component} from 'react';
class Add extends Component{
    addComent=()=>{
        let username = this.refs.username.value;
        let comment = this.refs.comment.value;
        let obj = {username,comment};
        if(!username || !comment){
            alert("输入内容必须完整");
            return ;
        }
        this.props.add(obj);
        // 添加完新值后，清空输入框
        this.refs.username.value = "";
        this.refs.comment.value = "";
    }
    render(){
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input ref="username" type="text" className="form-control" placeholder="用户名" />
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea ref="comment" className="form-control" rows="6" placeholder="评论内容"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button onClick={this.addComent} type="button" className="btn btn-default pull-right">提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Add;