import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const DRAWER_USERNAME = 'DRAWER_USERNAME';
export const SESSION_TOKEN = 'SESSION_TOKEN';
export const IS_FIRST = 'IS_FIRST';

// 对于vuex的用法，其实理解了流程就行
// vuex -> actions -> 提交（commit）mutations ->state -> view -> dispatch 触发 actions ->...
// actions 其实是mutations的升级版，它实现了mutations只能同步改变状态不能异步改变
// actions 就是可以异步操作mutation的提交
const state = {
  //loading动画
  tranform: true,
  //登录token
  sessionToken : '',
  //侧滑栏用户名
  drawerUsername:'登录 | 注册',
  //返回按钮是否是第一次按
  isFirst: true
}

const mutations = {
  //设置用户名
  [DRAWER_USERNAME](state,payload){
    state.drawerUsername = payload.drawerUsername;
  },
  //设置登录token
  [SESSION_TOKEN](state,payload){
    state.sessionToken = payload.sessionToken;
  },
  //设置第一次返回按钮
  [IS_FIRST](state,payload){
    state.isFirst = payload.isFirst;
  },

}

// actions中的函数接受一个与store实例有相同属性和方法的context对像
// 因此可以调用context中包含的state,getters以及mutations中定义的方法
// userLogin(context){
//   context.commit(types.LOGIN);
// }
// 使用es6的函数参数结构简化代码，可以直接将context.commit => commit使用
// 在.vue文件中通过store.dispatch('userLogin') 即可触发状态改变了
// 这里的data是因为提交mutations时需要获取从/api/login传回的user对象
const actions = {
  loginUsername({ commit }, data) {
    commit(
      DRAWER_USERNAME,
      {
        drawerUsername:data
      });
  },
  sessionToken({ commit }, data) {
    commit(
      SESSION_TOKEN,
      {
        sessionToken:data
      });
  },
  setIsFirst({ commit }, data) {
    commit(
      IS_FIRST,
      {
        isFirst:data
      });
  },

}



export default new Vuex.Store({
  state,
  mutations,
  actions
})