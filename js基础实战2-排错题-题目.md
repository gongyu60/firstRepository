# js基础实战2-排错题-题目

==请说出以下代码都错在哪里，以及书写正确的代码==



## JS代码书写位置

```html
<script src="./02.js">
    alert('弹框出现')
</script>
```

分析错误：引入外部js文件，那script标签内不能写内容

正确写法：

```js
<script>
    alert('弹框出现')
</script>
```





## 输出语句

```js
prompt(请输入您的姓名)
```

分析错误：

正确写法：文本要加引号

```js
prompt('请输入您的姓名')
```





## 变量01

```js
let age = 18
let age = 19
```

分析错误：重复申明相同的变量名





## 变量02

```js
console.log(age)
let age = 18
```

分析错误：let 不能在声明变量之前先使用变量

正确写法：

```js
let age = 18
console.log(age)
```







## 字符串01

```js
let username = 张三
```

分析错误：字符串要用引号包裹起来

正确写法：

```js
let username = '张三'
```







## 字符串02

```js
let uname = '张三"
```

分析错误：引号使用不规范

正确写法：

```js
let uname = '张三'
```







## 数组

```js
// 需求：取出 星期六 

let arr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
console.log(arr[6])
```

分析错误：下标提取错误

正确写法：

```js
let arr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
console.log(arr[5])
```









## 自增

```js
// 让num自身增加1

let num = 10

num + 1
```

分析错误：新数值没有赋值给变量

正确写法：

```js
let num = 10
num = num + 1
```









## switch分支

```js
let num = prompt('请输入一个数字')

switch (num) {
    case 1:
        alert('用户您输入的是数字1')
    case 2:
        alert('用户您输入的是数字2')
    case 3:
        alert('用户您输入的是数字3')
    default:
        alert('用户您输入的是非1、2、3的数字')
}
```

分析错误：输入的是数字字符串，case的值是数字类型。switch语句没有break，会造成穿透

正确写法：

```js
let num = prompt('请输入一个数字')

switch (num) {
    case '1':
        alert('用户您输入的是数字1')
    case '2':
        alert('用户您输入的是数字2')
    case '3':
        alert('用户您输入的是数字3')
    default:
        alert('用户您输入的是非1、2、3的数字')
}
```







## while循环

```js
let num = 1
while (num <= 5) {
    document.write(`月薪过万不是梦<br/>`)
}
```

分析错误：num变量没有变量变化量，会造成无限循环

正确写法：

```js
let num = 1
while (num <= 5) {
  num++
  document.write(`月薪过万不是梦<br/>`)
}
```









## for循环

```js
for (let i = 1; i <= 3;) {
    document.write(`月薪过万不是梦 <br/>`)
}
```

分析错误：i变量没有变量变化量，会造成无限循环

正确写法：

```js
for (let i = 1; i <= 3;i++) {
  document.write(`月薪过万不是梦 <br/>`)
}
```







## 遍历数组

```js
// 需求：取出数组中的每一项

let arr = ['马超', '赵云', '张飞', '关羽', '黄忠', '小黑', '小红']

for (let i = 1; i < arr.length; i++) {
    console.log(arr[i])
}
```

分析错误：i=1时取到'赵云'，取不到'马超'

正确写法：

```js
let arr = ['马超', '赵云', '张飞', '关羽', '黄忠', '小黑', '小红']

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
```







## 修改数组的项

```js
// 需求：将数组中的小白修改成 小灰灰
let arr = ['小黑', '小白', '小红']

arr = '小灰灰'
```

分析错误：

正确写法：数组缺少下标取不到元素

```js
let arr = ['小黑', '小白', '小红']

arr[1] = '小灰灰'
```







## 操作数组

```js
// 需求：在数组arr的最后面添加 blue

let arr = ['red', 'green']

arr.push = 'blue'
```

分析错误：语法错误，arr.push()

正确写法：

```js
let arr = ['red', 'green']

arr.push('blue')
```







## 对象

```js
// phone 手机对象

let phone = {
    size = 6.1
    play = function () {
        console.log('走起，吃鸡')
    }
}
```

分析错误：对象内元素没用逗号隔开，属性与属性值没用冒号隔开，方法名和函数没用冒号隔开

正确写法：

```js
let phone = {
    size : 6.1，
    play : function () {
        console.log('走起，吃鸡')
    }
}
```







## 遍历对象

```js
let obj = {
    uname: '小明',
    age: 18,
    sex: '男',
    height: 200,
}

// 遍历obj对象，取出对象的属性名和属性值
for (let k in obj) {
    console.log(k)
    console.log(obj.k)
}
```

分析错误：在for...in 语法中，对象的属性值需要通过 中括号语法才能取出对象的属性值

正确写法：

```js
let obj = {
    uname: '小明',
    age: 18,
    sex: '男',
    height: 200,
}

// 遍历obj对象，取出对象的属性名和属性值
for (let k in obj) {
    console.log(k)
    console.log(obj[k])
}
```









