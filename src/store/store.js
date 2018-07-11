import { createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'; //redux调试工具
import rootReducer from './reducers'; // 查看之前状态

let store = createStore(rootReducer,composeWithDevTools()); //创建状态储存区域

export default store;