# react-maizuo

## 技术栈
react+react-redux+react-router+antd+fetch

* react-redux
* redux
* redux-thunk(中间件，有了这个就可以支持异步action)
* isomorphic-fetch(基于Fetch的语法，在Node端基于http库实现的同构应用的 isomorphic-fetch)
* react-swipe(图片轮播）
* react-addons-css-transition-group
* bindActionCreators(actionCreators,dispatch)
  1.把 action creators 转成拥有同名 keys 的对象，但使用 dispatch 把每个 action creator 包围起来，这样可以直接调用它们。
  一般情况下你可以直接在 Store 实例上调用 dispatch。如果你在 React 中使用 Redux，react-redux 会提供 dispatch 。
  惟一使用 bindActionCreators 的场景是当你需要把 action creator 往下传到一个组件上，却不想让这个组件觉察到 Redux 的存在，而且不希望把 Redux store 或 dispatch 传给它。
  为方便起见，你可以传入一个函数作为第一个参数，它会返回一个函数。
  2.参数
  actionCreators (Function or Object): 一个 action creator，或者键值是 action creators 的对象。
  dispatch (Function): 一个 dispatch 函数，由 Store 实例提供。
  3.返回值
  (Function or Object): 一个与原对象类似的对象，只不过这个对象中的的每个函数值都可以直接 dispatch action。如果传入的是一个函数，返回的也是一个函数。
  4.小贴士
  你或许要问：为什么不直接把 action creators 绑定到 store 实例上，就像传统 Flux 那样？问题是这样做的话如果开发同构应用，在服务端渲染时就不行了。多数情况下，你 每个请求都需要一个独立的 store 实例，这样你可以为它们提供不同的数据，但是在定义的时候绑定 action creators，你就可以使用一个唯一的 store 实例来对应所有请求了。
  如果你使用 ES5，不能使用 import * as 语法，你可以把 require('./TodoActionCreators') 作为第一个参数传给 bindActionCreators。惟一要考虑的是 actionCreators 的参数全是函数。模块加载系统并不重要。
* display: table-cell;
## 构建过程
* 整体布局
