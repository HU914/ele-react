import store from './store';               // 状态库
import { addToCart }  from './actions/actions'; //处理状态

console.log("initial state: ", store.getState());

store.dispatch(addToCart('Coffee 500gm', 1, 250)); //分发状态到 状态储存区域

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})



unsubscribe(); //改变状态