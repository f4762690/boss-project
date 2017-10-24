/**
 * Created by Administrator on 2017/10/24.
 */
import Vue from  'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
Vue.use(Vuex);
const state = {
  userInfo:{}
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
