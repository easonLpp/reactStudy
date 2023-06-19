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
        if(this.state.isLogin){
            return (<UserGreet/>)
        }else{
            return (<UserLogin/>)
        }

    }
}

ReactDOM.render(
    <ParentCom/>,
    document.querySelector('#root')
)