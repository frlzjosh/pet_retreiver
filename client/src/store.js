import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      name: null,
      city: null,
      has_pet: null,
      pet_type: null,
      pet_name: null,
      has_collar: null
    }
  },
  getters: {
    getUserInfo: state =>  { return state.userInfo}
  },  
  mutations: {
    FETCH_USER_INFO(state, userObjectPayload){
      state.userInfo = userObjectPayload
    }
  },
  actions: {
    mutateUserInfo({commit}, payload){
      commit('FETCH_USER_INFO', payload)
    }
  }
})
