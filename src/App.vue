<template>
  <v-app class="grey lighten-4">
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footbar />    
  </v-app>
</template>

<script>
import Footbar from './components/Footbar';

export default {
  name: 'App',

  components: {
    Footbar
  },

  data: () => ({
    //
  }),
};
</script>
