import React from 'react';
import ReactDOM from 'react-dom';

// 1、class中，不可以存在多个class属性

let   element2 = <div className='abc'></div>;

// 2、style样式中，如果存在多个单词的属性组合，第二个单词开始，首字母大写。或者用引号引起来，否则会报错。
let exampleStyle = {
        background:"skyblue",
        borderBottom:"4px solid red",
        'background-image':"url(https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png)"
    }
    
let element3 = <div style={exampleStyle}>测试</div>
ReactDOM.render(
        element2,
        document.getElementById('root')
);

