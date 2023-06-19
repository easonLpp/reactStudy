import React from 'react';
import ReactDOM from 'react-dom';
let exampleStyle = {
    background:"skyblue",
    borderBottom:"4px solid red",
    'background-image':"url(https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png)"
}

let calssStr = 'def'
let element2 = (
    <div>
        <h1 className={'abc '+calssStr}>Helloworld</h1>
    </div>
)
// let classStr2 = ['abc2','redbg2'].join(" ")
// let element3 = (
//     <div>
//         {/* 注释 */}
//         <h1 className={classStr2} style={exampleStyle}>Helloworld2</h1>
//     </div>
// )
ReactDOM.render(
    element2,
    document.getElementById('root')
);

