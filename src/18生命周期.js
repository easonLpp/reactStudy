import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ComLife extends Component {
    constructor(props) {
        super(props) //调用继承 Component 的构造函数 （即实例化 Component 函数 绑定里面的 this）
        this.state = {
            msg: "hello world"
        }
        console.log("constructor 构造函数")
    }
    componentWillMount() {
        console.log("componentWillMount 组件将要渲染")
    }
    componentDidMount() {
        console.log("componentDidMount 组件渲染完毕")
    }
    componentWillReceiveProps() {
        console.log("componentWillReceiveProps 组件将要接收新的 state 和 props")
    }
    shouldComponentUpdate(){
        // 如果希望更新，就返回为真，不希望更新就返回为 false
        console.log("进行判断是否要更新内容")
        if(this.state.msg == "hello world"){
            return true
        }else{
            return false
        }
        
    }
    componentWillUpdate() {
        console.log("componentWillUpdate 组件将要更新")
    }
    componentDidUpdate() {
        console.log("componentDidUpdate 组件更新完毕")
    }
    componentWillUnmount() {
        console.log("componentWillUnmount 移除")
    }
    render() {
        console.log('render渲染函数')
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.changeMsg}>组件更新</button>
            </div>
        )
    }
    changeMsg = () => {
        this.setState({
            msg: "有翡"
        })
    }
}

class ParentCom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: true
        }
    }
    render() {
        if (this.state.isShow) {
            return (
                <div>
                    <button onClick = {this.removeCom}>移除</button>
                    <ComLife />
                </div>
            )


        } else {
            return <h1>已将 comLife 移除</h1>
        }
    }
    removeCom=()=>{
        this.setState({
            isShow:false
        })
    }
}

ReactDOM.render(
    <ParentCom />,
    document.getElementById("root")
)