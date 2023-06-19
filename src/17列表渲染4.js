import React from 'react';
import ReactDOM from 'react-dom';

function ListItem(props) {
    return (
        <li >
            <h3>{props.index}:{props.data.title}</h3>
            <p>{props.data.content}</p>
        </li>
    )
}

class ListItem2 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <li onClick={(e) => { this.clickEvent(this.props.index, this.props.data.title, e) }}>
                <h3>{this.props.index}:{this.props.data.title}</h3>
                <p>{this.props.data.content}</p>
            </li>

        )
    }
    clickEvent = (index, title, event) => {
        alert(index + ' ' + title)
    }
}

class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    title: '周四',
                    content: '平安夜'
                }, {
                    title: '周五',
                    content: '圣诞节'
                },
                {
                    title: '周六',
                    content: '斗地主'
                }
            ]
        }
    }
    render() {
        let listArr = this.state.list.map((item, index) => {
            return (
                <ListItem2 key={index} data={item} index={index}></ListItem2>

            )
        });

        return (
            <div>
                <h1>今日活动</h1>
                <ul>
                    {listArr}
                </ul>
                {/* 复杂没有用组件完成列表 */}
                <h1>复杂没有用组件完成列表 </h1>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li key={index} onClick={(e) => this.eventFn(item, index)}>
                                    <h3>{index}:{item.title}</h3>
                                    <p>{item.content}</p>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        )

    }
    eventFn = (item, index) => {
        alert(index + 'eventFn' + item.title)
    }
}
ReactDOM.render(
    <Welcome />, document.querySelector('#root')
)