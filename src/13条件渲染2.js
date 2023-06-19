import React from 'react';
import ReactDOM from 'react-dom';
function UserGreet(props){
    return(
        <h1>欢迎来到圣诞</h1>
    )
}
function UserLogin(){
    return (
        <h1>请登录</h1>
    )
}

class ParentCom extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLogin:true
        }
    }
    render(){
        let element = null
        if(this.state.isLogin){
            element = <UserGreet/>
        }else{
            element = <UserLogin/>
        }
        return (
            <div>
                <h1>头</h1>
                {element}
                <h1>这是三元运算符</h1>
                {this.state.isLogin?<UserGreet/>:<UserLogin/>}
                <h1>尾</h1>
            </div>
        )

    }
}

ReactDOM.render(
    <ParentCom/>,
    document.querySelector('#root')
)