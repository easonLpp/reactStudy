import React from 'react';
import ReactDOM from 'react-dom';
import './Tab.css'
// 子传父
class ParentCom extends React.Component{
    constructor(props){
        super(props)
        // 设置数据
        this.state = {
            childData:null,
        }
        // this.changeShow = this.changeShow.bind(this) //绑定 this
    }
    // 调用渲染函数
    render(){
        return(
            <div>
                <h1>子元素传递给父元素的数据：{this.state.childData}</h1>
                <ChildCom  setChildData={this.setChildData}/>
            </div>
        )
    }
    setChildData=(data)=>{ //箭头函数 绑定 this
        this.setState({
            childData:data
        })
    }
}
class ChildCom extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:"HelloWorld"
        }
        // this.sendData = this.sendData.bind(this)
    }
    render(){
        return(
            <div >
                {/* <button onClick={this.sendData}>传递helloworld给父元素</button> */}
                {/* 简写 */}
                {/* 这个 传参 会报错  */}
                {/* <button onClick={this.props.setChildData(this.state.msg)}>传递helloworld给父元素</button>  */}
                {/* 可以用箭头函数 传参 */}
                <button onClick={()=>{this.props.setChildData(this.state.msg)}}>传递helloworld给父元素</button> 
            </div>
        )
    }
    sendData=()=>{ // 箭头函数 等同于this.sendData = this.sendData.bind(this) 绑定 this
        // console.log(this.state.msg)
        // console.log(this.props)
        // 将子元素传递给父元素，实际是调用父元素传递进来的父元素函数
        this.props.setChildData(this.state.msg)
    }
}
ReactDOM.render(
    <ParentCom />,
    document.getElementById('root')
);
