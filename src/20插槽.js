import React from 'react';
import ReactDOM from 'react-dom';

class ParentCom extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
       
    }
    render(){
        return(
            <div>
                <h1>React 插槽</h1>
                {this.props.children}
                <ChildCom>
                    <h1 data-position="header">这里放置头部内容</h1>
                    <h1 data-position="main">这里放置主要内容</h1>
                    <h1 data-position="footer">这里放置尾部内容</h1>
                </ChildCom>
            </div>
        )
    }
}
class ChildCom extends React.Component{
    render(){
        let headerCom,mainCom,footerCom
        console.log(this.props)
        this.props.children.forEach((item,index)=>{
            if(item.props["data-position"] == "header"){
                headerCom = item
            }else if(item.props["data-position"] == "main"){
                mainCom = item
            }else{
                footerCom = item
            }
        })
        return(
            <div>
               <div className="header">
                  {headerCom}
               </div>
               <div className="main">
                  {mainCom}
               </div>
               <div className="footer">
                  {footerCom}
               </div>
            </div>
        )

    }
    
}
class RootCom extends React.Component{
    constructor(props){
        super(props)
        this.state={
            arr:[0,1,2]
        }
    }
    render(){
        return(
            <ParentCom>
                <h2 data-name="谢允" data-index={this.state.arr[0]}>子组件1</h2>
                <h2 data-name="周翡" data-index={this.state.arr[0]}>子组件2</h2>
                <h2 data-name="海绵宝宝"  data-index={this.state.arr[0]}>子组件3</h2>
            </ParentCom>

        )
    }
}

ReactDOM.render(
    <RootCom></RootCom>,
    document.getElementById("root")
)