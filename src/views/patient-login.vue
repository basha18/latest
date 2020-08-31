<template>
<v-app id="app">
    <v-main>
     <Appbar />
      <v-container fluid class="rounded-0">
        <v-row align="start" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12"> 
              <v-toolbar color="blue" flat>
                <v-toolbar-title>Patient Login</v-toolbar-title>                
              </v-toolbar>
              <v-card-text>
                <v-form>  
                  <v-row>
                    <v-col>
                        <v-text-field
                            label="Phone number"
                            v-model="mobile"
                            prepend-icon="mdi-account"
                            type="email"
			    hint="ex: +917892345671"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                      <v-btn  @click.native="signIn" class="my-3" color="blue">Get OTP</v-btn>
                    </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                        
                        <v-text-field
                            v-model="otp"
                            label="Enter Secret Code"
                            prepend-icon="mdi-lock"
                            type="password"
                            ></v-text-field>
                        </v-col>
                        <v-col>
                            <v-btn  @click.native="verifyAuth" class="my-3" color="blue">Verify OTP</v-btn>
                        </v-col>
                      </v-row>  
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
          </v-row>
      </v-container>
     </v-main>
    </v-app>
</template>
<script>
import Auth from '@aws-amplify/auth'; 
const WAITINGFOROTP = "Enter OTP number";
const ERROR1 = "InCorrect Phone number"
const ERROR2 = "Incorrect Secret Code"
export default {
    data () {
      return {
        mobile: '',
        otp: '',
        message:''        
      }
    }, 
    methods: {
        signIn (){
	    var AuthOptions = {userPoolId: this.$store.state.cognito_user_pool_id_patient,
			       userPoolWebClientId: this.$store.state.cognito_appclient_id_patient}

	    Auth.configure(AuthOptions)
	    
            Auth.signIn(this.mobile)
            .then(result => {
                this.session = result;                
		console.log(result)
                console.log('successful sign in')
            }
            )
            .catch(err => {
                this.message = ERROR1;   
                console.log(err)
            });
        },
        verifyAuth () {
	    Auth.sendCustomChallengeAnswer(this.session, this.otp)
            .then(user => {
            this.user = user;          
            this.session = null;
	    console.log('successfully logged in with secret code')
	    this.$router.push('/patient-home')		
            })
            .catch(err => {
            console.error(err);
            this.message = ERROR2;
            });
        }
   }     
}
</script>
