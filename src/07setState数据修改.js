import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
    constructor(props){
        super(props)
        // 状态（数据）--》视图
        // 构造函数初始化数据，将需要改变的数据初始化到 state 中
        this.state = {
            time:new Date().toLocaleTimeString()
        }
        console.log(this.state.time) //这里不会调用 变化
    }
    render() {
        // console.log('这是渲染函数')
        // this.state.time = new Date().toLocaleTimeString() // 渲染函数会重新调用 ，可以在这里修改数据
        return (
            <div>
                <h1>当前时间：{this.state.time}</h1>
            </div>
        )
    }
    // 生命周期函数，组件渲染完成时的函数
    componentDidMount(){
        setInterval(()=>{
            console.log(this.state.time)
            // this.state.time = new Date().toLocaleTimeString() // 错误的 修改数据方法
            // 不可以直接修改state数据，需要使用 setState 来修改数据
            // 通过 this.setState修改完数据后，并不会立即修改DOM里面的内容，react 会在 这个函数内容（setState)所有设置
            // 状态改变后，统一对比虚拟 DOM　对象，然后统一修改，提升性能。
            // 小程序　也是借鉴ｒｅａｃｔ状态管理
            this.setState({
                time:new Date().toLocaleTimeString()
            })
        },1000)
    }

}
ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);
