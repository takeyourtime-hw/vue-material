import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store= new Vuex.Store({
    state: {
        num: 10
      },
      mutations: {
        increment (state,n) {
          state.num+=n
        },
        mncrement (state) {
          state.num--;
        },
      },
      actions: {
        incrementAsync (context) {
            setTimeout(() => {
                context.commit('increment',5)
            }, 1000)
          }
      }
})
export default store