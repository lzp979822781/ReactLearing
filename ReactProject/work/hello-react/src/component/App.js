import React,{Component} from 'react';
import './App.css';
import logo from "./logo.svg"
class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="App-header" >
          <img src={logo} className="App-logo" />
          <h2 className="App-title">www.liuzhipeng.com</h2>
        </div>
        <h2 className="App-intro">用友网络科技股份有限公司</h2>
      </div>
    )
   
  }
}

export default App;