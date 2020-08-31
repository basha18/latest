import Vue from 'vue'
import Vuex from 'vuex'
import {
	    CognitoUserPool,
	    CognitoUser,
	    AuthenticationDetails
	  } from 'amazon-cognito-identity-js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
       cognito_userpool_id: process.env.VUE_APP_COGNITO_USERPOOL_ID,
       cognito_appclient_id: process.env.VUE_APP_COGNITO_CLIENT_ID,	  
       authenticated: false,
       idToken: null	  
  },
  mutations: {
	  authUser (state,userData){
		  state.idToken = userData.token,
		  state.authenticated = userData.authenticated
	  }

  },
  actions: {
       staffLogin({commit,dispatch},authData){
	       const authData2 = {
		                       Username: authData.username,
		                       Password: authData.password
		               }
	       const authDetails = new AuthenticationDetails(authData2)
	       const poolData = {
		                     UserPoolId: process.env.VUE_APP_COGNITO_USERPOOL_ID,
		                     ClientId:  process.env.VUE_APP_COGNITO_CLIENT_ID
		               }
	       const userPool = new CognitoUserPool(poolData)
	       const userData = {
		                     Username: authData.username,
		                     Pool: userPool
		               }
	       const cognitoUser = new CognitoUser(userData)
	       cognitoUser.authenticateUser(authDetails, {
		                          onSuccess: function(result) {
						       console.log('Successfully logged!')
						       console.log(result)
						       idToken = result.getAccessToken().getJwtToken()
						       commit('authUser',{
							       token: idToken,
							       authenticated: true
						       })
						       console.log(idToken)
						       },
		                          onFailure: function(err) {
						       console.log('error')
						       alert(err.message || JSON.stringify(err))
					  },
		               })

  	}
  },	  
  getters: {

  }
})
