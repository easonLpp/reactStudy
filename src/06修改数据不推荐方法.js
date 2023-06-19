import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
    constructor(props){
        super(props)
        // 状态（数据）--》视图
        this.state = {
            time:new Date().toLocaleTimeString()
        }
        console.log(this.state.time) //这里不会调用 变化
    }
    render() {
        // console.log('这是渲染函数')
        this.state.time = new Date().toLocaleTimeString() // 渲染函数会重新调用 ，可以在这里修改数据
        return (
            <div>
                <h1>当前时间：{this.state.time}</h1>
            </div>
        )
    }

}
ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);

// 不推荐 这种方式 来修改数据 应为 此时 是把 ReactDOM.render 函数和 <Clock /> 组件 耦合在一起了。
// 我们希望 <Clock /> 组件可以自发的 同步数据修改
setInterval(()=>{
    ReactDOM.render(
        <Clock />,
        document.getElementById('root')
    )
    // console.log(new Date())
})