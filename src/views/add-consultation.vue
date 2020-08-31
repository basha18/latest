<template>
 <div id="app">
      <v-container app  class="mx-50 my-10">
        <v-row align="start" justify="center">
          <v-col  cols="12" sm="8" md="4">
            <v-card>
		<v-toolbar  color="blue">
                   <v-toolbar-title>Add Consultation </v-toolbar-title>
                <v-spacer></v-spacer>
                </v-toolbar>

	    	<v-card-text>
                <v-form @submit.prevent="onSubmit" id="submit-form" scrollable>
		  <!--v-text-field label="Name"  v-model="name" type="text"></v-text-field-->
		  <!--v-text-field v-model="age" label="Age"  type="number"></v-text-field-->
                  <v-text-field label="Enter your email"  v-model="email" type="email"></v-text-field>
		  <v-text-field label="Date"  v-model="date" type="date"></v-text-field>
		  <v-select     v-model="city" :items= "cities" label="City" type="text"></v-select>
		  <v-select     v-model="country" :items= "countries" label="Country" type="text"></v-select>
		  <v-select     v-model="dept" :items= "depts" label="Dept" type="text"></v-select>
		  <v-select     v-model="doctor" :items= "doctors" label="Doctor" type="text"></v-select>
		  <v-textarea   v-model="diagnosis" class="mx-2" label="Diagnosis" rows="5"></v-textarea>
		</v-form>
              </v-card-text>
	     <v-card-actions>
                <v-btn router to="/staff-home">Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn type="submit" form="submit-form" color="blue">Submit</v-btn>
              </v-card-actions>
	    </v-card>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
import axios from '../axios-auth';
export default {
  data() {
    return {
      email: '',
      depts:['Neurology','Optomology','General Medicine'],
      doctors:['Arvind Kumar','Somesh'],
      diagnosis:'', 
      doctor:'',
      dept: '',
      date: '',
      city: '',
      country: '',
      cities: ['Bengaluru','Hyderabad','Chennai'],
      countries: ['India']

    }
  },
  methods: {
    onSubmit() {

        const formData ={ patient_id: this.email,
                                  department: this.dept,
                                  doctor: this.doctor,
                                  consultation_date: this.date,
				  city: this.city,
				  country: this.country,
				  diagnosis: this.diagnosis
                                  }
        console.log(formData)
        axios.post('https://pobg7zrye4.execute-api.us-east-1.amazonaws.com/v1/add-user/appointment', formData)
        .then(res => console.log(res))
        .catch(error => console.log(error))

    }
  }

}
</script>
