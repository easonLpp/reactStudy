import React from 'react';
// import ReactDOM from 'react-dom';
// hash 模式  #/ 
// import {HashRouter as Router,Link,Router} from 'react-router-dom'

// history 模式 需要后端配合
import {BrowserRouter as Router,Link,Route,Redirect,Switch} from 'react-router-dom'

function LoginInfo(props){
    // props.loginState = 'success'
    // props.loginState = 'fail'
    console.log(props)
    if(props.location.state.loginState == 'success'){
        return <Redirect to="/admin"></Redirect>
    }else{
        return <Redirect to="/login"></Redirect>
    }
}
let FormCom = ()=>{
    let pathObj = {
        pathname:"/loginInfo",
        state:{
            loginState:'success'
        }
    }
    return(
        <div>
            <h1>表单验证</h1>
            <Link to={pathObj}>表单验证后页面</Link>
        </div>
    )
}
class ChildCom extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.clickEvent}>跳转到首页</button>
            </div>
        )
    }
    // 使用 js 方法跳转路由
    clickEvent=()=>{
        console.log(this.props)
        // this.props.history.push('/',{msg:"这里是由childCom组件发给首页的数据"})
        // this.props.history.replace('/',{msg:"这里是由childCom组件发给首页的数据"})
        // 前进
        // this.props.history.go(1)
        // this.props.history.goForward()
        // 后退
        // this.props.history.go(-1)
        // this.props.history.goBack()
    }
}
class App extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        <Route path="/:id" exact component={(props)=>{console.log(props);return(<h1>首页</h1>)}}></Route>
                        <Route path="/login" exact component={()=>(<h1>登录</h1>)}></Route>
                        <Route path="/form" exact component={FormCom}></Route>
                        <Route path="/loginInfo" exact component={LoginInfo}></Route>
                        <Route path="/admin" exact component={()=>(<h1>admin页</h1>)}></Route>
                        <Route path="/abc"  component={()=>(<h1>abc1页面，登陆成功</h1>)}></Route>
                        <Route path="/abc"  component={()=>(<h1>abc2页面，登陆成功</h1>)}></Route>
                        <Route path="/child" component={ ChildCom }></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App