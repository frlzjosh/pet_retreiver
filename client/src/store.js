import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
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
    },
    pet_images: [],
    pet_names: []
  },
  getters: {
    getUserInfo: state =>  { return state.userInfo},
    getPetImages: state =>  { return state.pet_images},
    getPetNames: state => index =>state.pet_names[index]
  },  
  mutations: {
    FETCH_USER_INFO(state, userObjectPayload){
      state.userInfo = userObjectPayload
    },
    FETCH_PET_IMAGES(state, petImages){
      state.pet_images.push(petImages)
    },
    SET_USER(state, userName){
      state.userInfo.name = userName
    }

  },
  actions: {
    setUserName({commit}, payload){
      commit('SET_USER', payload)
    },
    mutateUserInfo({commit}, payload){
      commit('FETCH_USER_INFO', payload)
    },
    findPets({commit}){
      var i = 0;
      for(i =0; i<3; i++ ){
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then( resp => {
          commit('FETCH_PET_IMAGES', resp.data.message)
        })
      }
    }
  }
})
