# 对象代理数据库

提供以 `Proxy` 实现的基于 `localStorage` 的对象代理数据库。

## 导入

通过 `import Database form './Database.js'` 以 ES 模块形式导入。

## 使用

下面的代码展示了存储“学生名单”：

```javascript
import Database from './Database.js' // 以实际路径为准

// 原始结构：
// {
//     '01': {
//         name: '孙建国',
//         age: '8'
//     },
//     '02': {
//         name: '王花花',
//         age: '9'
//     }
// }

// 传入值将作为内部实现的存储键
const students = new Database('students') 

students.dataset['01'] = {
    name: '孙建国',
    age: '8'
}

students.dataset['02'] = {
    name: '王花花',
    age: '8'
}

console.log(students.dataset) // 具体学生名单（Proxy 对象）
```

## 开发进度

目前支持基于本地储存 `localStorage` 的实现方法，下一步将支持网络储存。
