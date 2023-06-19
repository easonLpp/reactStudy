import React from 'react';
import ReactDOM from 'react-dom';
import './Tab.css'
// 子传父
class ParentCom extends React.Component {
    constructor(props) {
        super(props)
    }
    // 调用渲染函数
    render() {
        return (
            <div >
                <form action="http://www.baidu.com">
                    {/* 点击 提交按钮 会触发默认事件 跳转到百度 需要阻止默认事件 */}
                    <button onClick={this.parentEvent}>提交</button>
                    <h1 >我不如 Vue </h1>
                </form>
                {/* 错误的传参方式 */}
                {/* <button onClick={this.parentEvent2(123)}>提交</button> */}

                <button onClick={(e)=>this.parentEvent2(123)}>提交</button>

                {/* 使用 es6 箭头函数的方式 */}
                <button onClick={(e)=>this.parentEvent2('msg:hello',e)}>提交</button>
                
                {/* 不使用 es6 箭头函数的方式 */}
                <button onClick={function(e){this.parentEvent2('msg:hello',e)}.bind(this)}>提交</button>

            </div>
        )
    }
    parentEvent = (e) => {
        console.log(e)
        // return false  这个方法在这里 不能阻止默认事件
        e.preventDefault()
    }
    parentEvent2 = (msg,e) => {
        console.log(msg)
        console.log(e) //事件对象 e
    }
}
ReactDOM.render(
    <ParentCom />,
    document.getElementById('root')
);
