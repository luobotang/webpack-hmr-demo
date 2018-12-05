# webpack-hmr-demo

DEMO of Webpack HMR

## 说明

这是一个 Webpack HMR 的演示项目，clone 到本地后先执行 ```npm install``` 安装必要的依赖模块。

安装必要模块后，可以直接通过 ```npm start``` 运行，就得到了一个简单的具有 Webpack HMR 配置的项目，可以修改源码并观察打开的页面的变化（包括控制台输出），以实践 Webpack HMR 的用法。

也可以按照下面的步骤，查看不同的 Webpack HMR 配置的 DEMO。

## 使用

### step-1：没有热更新的情况

初始化：

```
git checkout step-1
```

这种情况下，对任何模块代码的修改，都会导致页面刷新。

### step-2：处理依赖模块更新的情况

初始化：

```
git checkout step-2
```

根据配置：

- 修改 timer.js，更新被处理，页面正常响应 timer.js 的改动（修改定时器的间隔时间）
- 修改 foo.js，更新不能处理，页面刷新
- 修改 index.js，页面刷新

### step-3：处理自身模块更新的情况

初始化：

```
git checkout step-3
```

这种情况下，对 index.js 代码的修改（修改对数值的渲染方式），会被处理，页面不刷新，数据状态保持。
