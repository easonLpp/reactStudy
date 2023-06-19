import React from 'react';
import ReactDOM from 'react-dom';
import  { createStore } from 'redux '
const reducer = function (state = { num: 0 }, action) {
    switch (action.type) {
        case "add":
            state.num++;
            break;
        case 'decrement':
            state.num--;
            break;
    }
    return { ...state }
}
const store = createStore(reducer)
console.log(store)
function add() {
    // 通过仓库的方法dispatch 进行修改数据
    store.dispatch({ type: "add" })
}
function decrement() {
    // 通过仓库的方法 dispatch 进行修改数据
    store.dispatch({ type: "decrement" })
}

// 函数式计数器
const Counter = function (props) {
    console.log(store.getState())
    return (
        <div>
            <h1>计数数量：</h1>
            <button onClick={add}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    )
}
ReactDOM.render(
    <Counter />,
    document.getElementById('root')
);