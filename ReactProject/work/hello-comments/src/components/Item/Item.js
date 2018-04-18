import React,{Component} from 'react';
class Item extends Component{
    delComment=()=>{
        let index = this.props.index;
        if(window.confirm(`你确定要删除${this.props.comment.username}的评论吗？`)){
            this.props.del(index);
        }
    }
    render(){
        let {comment} = this.props;
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.delComment}>删除</a>
                </div>
                <p className="user"><span >{comment.username}</span><span>说:</span></p>
                <p className="centence">{comment.comment}</p>
            </li>
        )
    }
}

export default Item;