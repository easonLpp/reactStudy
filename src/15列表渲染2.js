import React from 'react';
import ReactDOM from 'react-dom';

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
        let listArr = [];
        for (let i = 0; i < this.state.list.length; i++) {
            let item = (
                <li>
                    <h3>{this.state.list[i].title}</h3>
                    <p>{this.state.list[i].content}</p>
                </li>

            )
            listArr.push(item)
        }
        return (
            <div>
                <h1>今日活动</h1>
                <ul>
                    {listArr}
                </ul>

            </div>
        )
    }
}
ReactDOM.render(
    <Welcome />, document.querySelector('#root')
)