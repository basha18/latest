<template>
   <v-app id="inspire">
    <v-main>
     <Appbar />
      <v-container
        fluid
      >
        <v-row
          align="start"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="blue"
                flat
              >
                <v-toolbar-title>Staff Login</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="onSubmit" id="submit-form">
                  <p v-if="isLoading"> Verifying the details ... </p>
                  <v-text-field
                    label="Username"
                    v-model="Username"         
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    v-model="Password"
                    label="Password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field><br>
		  <p class="red--text"> {{this.message}} </p>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn type="submit" form="submit-form" color="blue">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
     </v-main>
    </v-app>
</template>

<script>
  
  import Auth from '@aws-amplify/auth';
  const parseJson = require('parse-json');

  const ERROR1 = "Incorrect Username or Password"
  const MESSAGE = " Verifying the User ...."

  export default {
    data () {
      return {
        Username: '',
        Password: '',
	message: '',
	token: '',
	session: '',
	isLoading: false
      }
    },
    methods: {
      async onSubmit () {
	const authData = {
		Username: this.Username,
		Password: this.Password,
	}
        console.log(authData)
        var username=''   	
	var AuthOptions = {userPoolId: this.$store.state.cognito_userpool_id,
                               userPoolWebClientId: this.$store.state.cognito_appclient_id
			   }
	Auth.configure(AuthOptions)
	await Auth.signIn(this.Username,this.Password)
	    .then((result) => {
                console.log(result)	
		this.session = result
		this.isLoading = true
                console.log('successful sign in')
           })
	   .catch((err) => {
                this.message = ERROR1;
                console.log(err)
              });
	 console.log(this.session)
	 var username = this.session.getUsername()
	 var signInSession = this.session.getSignInUserSession()
	 console.log(signInSession)
 
	 //var json_data = parseJson(result)
	 //console.log(json_data)
	 this.$store.state.auth_username = username

	 if(username === this.Username)
	 {
	    this.$router.push('/staff-home')
	 }
	 else
	 {
            this.message = ERROR1
	 }

	}
     }
  }

</script>
