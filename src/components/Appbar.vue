<template>
  <div>
    <v-app-bar
      app
      flat
      color="grey lighten-4"
      >

      <v-btn router to="/">
        <span class="mr-2">Home </span>
        <v-icon>mdi-home-circle</v-icon>
      </v-btn>

      <v-toolbar-title class="font-weight-light.font-italic light-blue--text pl-10" >
		Health Care System
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text router to="/staff-login">
        <span class="mr-2">Staff Login</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>

     <v-btn text router to="/patient-login">
        <span class="mr-1">Patient Login</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style>
.btn{
}
</style>
