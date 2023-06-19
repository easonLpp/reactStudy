import React from 'react';
import ReactDOM from 'react-dom';
// hash 模式  #/ 
// import {HashRouter as Router,Link,Router} from 'react-router-dom'

// history 模式 需要后端配合
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'

function Home(){
    return(
        <div>
            <h1>admin首页</h1>
        </div>
    )
}
function Me(){
    return(
        <div>
            <h1>admin个人中心</h1>
        </div>
    )
}
function Product(){
    return(
        <div>
            <h1>admin产品页面</h1>
        </div>
    )
}

class App extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/me">me</Link>
                    </div>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/product"  component={Product}></Route>
                    <Route path="/me"  component={Me}></Route>
                </Router>
            </div>
        )
    }
}
export default App