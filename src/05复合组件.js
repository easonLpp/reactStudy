import React from 'react';
import ReactDOM from 'react-dom';

// let h1 = <h1>helloworld</h1>
function Clock(props) {
    console.log(props)
    let title = <h2>我是副标题</h2>

    let weather = props.weather
    // 条件判断
    let isGo = weather=='下雨'?'不出门':'出门'
    return (
        <div>
            <h1>函数式组件</h1>
            {title}
            <div>
                是否出门？
                <span>{isGo}</span>
            </div>
        </div>
    )
}
// 类组件定义 Helloworld 继承 React.Component
class Helloworld extends React.Component{
    render(){   //渲染视图
        console.log(this)
        return (
            <div>
                <h1>类组件HELLOWORLD</h1>
                <h1>hello{this.props.name}</h1>
                <Clock weather={this.props.weather}/> {/* weather 传给 Clock组件 let weather = props.weather*/}
            </div>
        )
    }
}
ReactDOM.render(
    <Helloworld name='123' weather='下雨'/>,//weather传给<Clock weather={this.props.weather}/>
    document.getElementById('root')
);

