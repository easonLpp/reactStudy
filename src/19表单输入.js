import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ComLife extends Component {
    constructor(props) {
        super(props) //调用继承 Component 的构造函数 （即实例化 Component 函数 绑定里面的 this）
        this.state = {
            value: ""
        }
    }

    render() {
        console.log('render渲染函数')
        return (
            <div>
              <input type="text" value={this.state.value} onKeyDown={this.keyEvent} onChange={this.changeEvent}/>
            </div>
        )
    }
    keyEvent=(e)=>{
        console.log(e)
        if(e.keyCode == 13){
            console.log(e.target.value)
            // this.setState.value = e.target.value
        }
    }
    changeEvent=(e)=>{
        // console.log(e)
        this.setState({
            value:e.target.value
        })

    }

}



ReactDOM.render(
    <ComLife />,
    document.getElementById("root")
)