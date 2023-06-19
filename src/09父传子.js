import React from 'react';
import ReactDOM from 'react-dom';
import './Tab.css'

// 在父元素中使用 state 去控制子元素 props 从而达到父元素传递数据给子元素
class ParentCom extends React.Component{
    constructor(props){
        super(props)
        // 设置数据
        this.state = {
            isShow:true,
        }
        this.changeShow = this.changeShow.bind(this) //绑定 this
    }
    // 调用渲染函数
    render(){
        return(
            <div>
                <button onClick={this.changeShow}>控制子元素显示</button>
                <ChildCom isActive={this.state.isShow} />
            </div>
        )
    }
    changeShow(){
        this.setState({
            isShow:!this.state.isShow
        })

    }
}
class ChildCom extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        let strClass = null
        if(this.props.isActive ){
            strClass = ''
        }else{
            strClass = "active"
        }
        return(
            <div className={"content "+strClass}>
                <h1>我是子元素</h1>
            </div>
        )
    }
}
ReactDOM.render(
    <ParentCom />,
    document.getElementById('root')
);
