import React from 'react';
import ReactDOM from 'react-dom';

// 它接收唯一带有数据的 “props”（代表属性）对象与并返回一个 React 元素。
// 这类组件被称为“函数组件”，因为它本质上就是 JavaScript 函数。
// let h1 = <h1>helloworld</h1>
function Clock(props) {
    let title = <h2>我是副标题</h2>

    let weather = '下雨'
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
// let exampleStyle = {
//     background:"skyblue",
//     borderBottom:"4px solid red",
//     'background-image':"url(https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png)"
// }

// let element2 = <div style={exampleStyle}>测试</div>
// 类组件定义 Helloworld 继承 React.Component
class Helloworld extends React.Component{
    
    render(){   //渲染视图
//         console.error("%c 警告！警告！警告！"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em")
//         // console.log("%c ", "background: url(http://p79mwfmry.bkt.clouddn.com/logo50.jpg) no-repeat center;padding-left:80px;padding-bottom: 80px;border-radius:50%;")
// // 　　console.log("%c ", "background: url(http://p3i10hjs7.bkt.clouddn.com/console.jpeg) no-repeat center;padding-left:640px;padding-bottom: 242px;")
//         console.log("%c ", "padding:50px 300px;line-height:340px;background:url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20190419%2Fb5c3f1ebe2ad453da6dd3250c1bb0cd3.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612430911&t=8b8fc3120abba8dc6e520c6f7b70c36f) no-repeat;");
//         // console.log("%c ", "padding:50px 300px;line-height:340px;background:url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20190519s%2F320%2Fw558h562%2F20190519%2F580d-hxhyium2101516.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612431309&t=b0a84798f93c2b508c7395e7794b01dc) no-repeat;");
        return (
            <div>
                <h1>类组件HELLOWORLD</h1>
            </div>
        )
    }
   
}
// let el2 = <h1>hhhhhxiabanl </h1>
ReactDOM.render(
    <Helloworld/>,
    document.getElementById('root')
);