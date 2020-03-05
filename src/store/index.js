import Vue from "vue";
import Vuex from "vuex";
//import _ from 'lodash';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    LOADING: false
  },
  mutations: {
    showLoading(state) {
      state.LOADING = true;
    },
    hideLoading(state) {
      //  setTimeout(() => {
      //   state.LOADING = false;
      //  }, 300);
      // _.debounce(()=>{
      //   state.LOADING = false;
      // }, 300);
      state.LOADING = false;
    }
  }
});
export default store;
