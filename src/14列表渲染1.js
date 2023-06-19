import React from 'react';
import ReactDOM from 'react-dom';

let arr = ["路飞","索隆","乔巴"]

let arrHtml = [<li>路飞</li>,<li>索隆</li>,<li>乔巴</li>]
class Welcome extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <ul>
                    {arrHtml}
                </ul>
            </div>
        )
    }
}
ReactDOM.render(
    <Welcome/>,document.querySelector('#root')
)