import React from 'react';
import ReactDOM from 'react-dom';

// JSX
let element = <h1>我不是字符串 也不是HTML 我是 JSX</h1>

// 现在下午 4点半 我好饿 ........... 我想吃饭   
// 饿 饿 饿 饿 饿 饿 饿 饿 饿 饿
// 公司为什么 不在 4点的时候 有个下午茶时间  我真的想去吃饭 饿饿饿饿
// 我刚刚吃了十几个汤圆  太甜了 我现在想吃 泡面  我自己煮的泡面  可视我肚子痛 吃泡面 会不会更痛 纠结 
// 不过 可能 过一会就饿 过去了 就不会 饿了   回家这么冷 肯定就直接进被窝了 不会去煮面的
// 但是我现在真的想吃 那个 有你一面 还是见你一面 的那个拌面
// 我只是个卑微的打工人 我不能去吃饭 害 我不开心了 现在
// 其实我昨天这个时候也饿了  但是我不记得我怎么过来的 但是现在我过不去了  肚子不舒服 不想吃楼下的零食了
// 我们楼下为什么没有。。。算了 撒也没有 撒也不是  饿着吧 垃圾 坏东西
// 2021 1 7 周四  16：38
// 我现在在吃糖  我不想吃甜的了但是我没有吃的了 我现在超级超级超级超级不开心    
// 好饿 好饿 好饿 好饿 撒时候下班啊！！！！！！！！！！！！！！！

// 现在 17：22 还有 半小时 就可以下班了 我再坚持一下 就可以回去吃东西了 加油 嗷呜
// 我听到要拍视屏 但是我好饿 没有力气 而且 我不该在这里  我是个菜菜 
// 在JSX嵌入表达式
const name = "元旦"
const element2 = <h1>放假了,{name}</h1>

// 在 JSX 语法中，你可以在大括号内放置任何有效的 JavaScript 表达式。
// 例如，2 + 2，user.firstName 或 formatName(user) 都是有效的 JavaScript 表达式。

function formatName(user){
    return user.firstName + ' ' + user.lastName;
}
const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element3 = (
    <h1>
      {/* Hello, {formatName(user)}! */}
    {getGreeting(user)}!
    </h1>
);

// JSX 也是一个表达式
// 可以在 if 语句和 for 循环的代码块中使用 JSX，将 JSX 赋值给变量，把 JSX 当作参数传入，以及从函数中返回 JSX：
function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }


//   可以通过使用引号，来将属性值指定为字符串字面量：
const element4 = <div tabIndex="0"></div>;

// 也可以使用大括号，来在属性值中插入一个 JavaScript 表达式：
const element5 = <img src={user.avatarUrl}></img>;

// 在属性中嵌入 JavaScript 表达式时，不要在大括号外面加上引号。
// 你应该仅使用引号（对于字符串值）或大括号（对于表达式）中的一个，对于同一属性不能同时使用这两种符号。

// 使用 camelCase（小驼峰命名）来定义属性的名称。

// JSX 标签里能够包含很多子元素:
const element6 = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you here.</h2>
    </div>
  );

//   JSX 防止注入攻击
// React DOM 在渲染所有输入内容之前，默认会进行转义。
// 它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。
// 所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 XSS（cross-site-scripting, 跨站脚本）攻击。




// ReactDOM.render(<h1>明天放假了 啦啦啦啦啦</h1>,document.getElementById("root"))
ReactDOM.render(element3,document.getElementById("root"))