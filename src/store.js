import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
       cognito_userpool_id: process.env.VUE_APP_COGNITO_USERPOOL_ID_STAFF_USER,
       cognito_appclient_id: process.env.VUE_APP_COGNITO_CLIENT_ID_STAFF_USER,
       staff_auth_username: null,
       cognito_user_pool_id_patient: process.env.VUE_APP_COGNITO_USERPOOL_ID_PATIENT_USER,
       cognito_appclient_id_patient: process.env.VUE_APP_COGNITO_CLIENT_ID_PATIENT_USER,
       patient_auth_username:null,
       staff_token:null	  
  },
  mutations: {

  },
  actions: {
  },	  
  getters: {

  }
})
